import { Readable } from 'stream';
import Stripe from 'stripe';
import { sendEmail } from '../utils/email';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default defineEventHandler(async (event) => {
    if (event.node.req.method === 'POST') {
        const sig = event.node.req.headers['stripe-signature'];
        const buf = await buffer(event.node.req);
        const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET!;

        let stripeEvent;

        try {
            stripeEvent = stripe.webhooks.constructEvent(buf.toString(), sig!, endpointSecret);
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error('Webhook error:', err.message);
                return { statusCode: 400, body: `Webhook Error: ${err.message}` };
            } else {
                console.error('Unknown error occurred:', err);
                return { statusCode: 400, body: 'Webhook Error: Unknown error' };
            }
        }

        switch (stripeEvent.type) {
            case 'payment_intent.succeeded':
                const paymentIntent = stripeEvent.data.object as Stripe.PaymentIntent;
                await sendEmail(paymentIntent);
                break;
        }

        return { statusCode: 200, body: { received: true } };
    } else {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }
});

async function buffer(readable: Readable): Promise<Buffer> {
    const chunks: Buffer[] = [];
    for await (const chunk of readable) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    }
    return Buffer.concat(chunks);
}
