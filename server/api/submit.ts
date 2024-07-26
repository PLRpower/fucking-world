import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default defineEventHandler(async (event) => {
    if (event.node.req.method === 'POST') {
        const body = await readBody(event);

        const customers = await stripe.customers.list({
            email: body.email,
            limit: 1,
        });

        const customer = customers.data.length > 0 ? customers.data[0] : await stripe.customers.create({
            email: body.email,
            name: body.prenom + ' ' + body.nom,
            phone: body.telephone,
        });

        const paymentIntent = await stripe.paymentIntents.create({
            customer: customer.id,
            amount: body.quantity * 1000,
            currency: "eur",
        });

        return { success: true, clientSecret: paymentIntent.client_secret };
    }

    return { error: 'Invalid method' };
});