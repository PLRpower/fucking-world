import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default defineEventHandler(async (event) => {
    if (event.node.req.method === 'POST') {
        const body = await readBody(event);

        const quantity = body.quantity;

        const paymentIntent = await stripe.paymentIntents.create({
            amount: quantity * 1000,
            currency: "eur",
        });

        return { success: true, clientSecret: paymentIntent.client_secret };
    }

    return { error: 'Invalid method' };
});