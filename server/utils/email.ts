import Stripe from 'stripe';
import nodemailer from 'nodemailer';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function sendEmail(paymentIntent: Stripe.PaymentIntent) {

    const customer = await stripe.customers.retrieve(paymentIntent.customer as string);
    if (isDeletedCustomer(customer)) {return}

    const emailData = {
        from: '"F*cking World" <contact@osalys.studio>',
        to: customer.email!,
        subject: "Réservation confirmée pour l'évènement F*cking World",
        text: `Merci pour votre inscription d'un montant de ${paymentIntent.amount_received / 100}€.`,
        html: `<p>Merci pour votre inscription d'un montant de ${paymentIntent.amount_received / 100}€.</p>`
    };

    await transporter.sendMail(emailData);

}

function isDeletedCustomer(customer: Stripe.Customer | Stripe.DeletedCustomer): customer is Stripe.DeletedCustomer {
    return (customer as Stripe.DeletedCustomer).deleted !== undefined;
}