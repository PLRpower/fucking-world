// server/utils/email.ts
import Stripe from 'stripe';
import nodemailer from 'nodemailer';

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

    const emailData = {
        from: '"F*cking World" <contact@osalys.studio>',
        to: paymentIntent.receipt_email!,
        subject: "Réservation confirmée pour l'évènement F*cking World",
        text: `Merci pour votre inscription d'un montant de ${paymentIntent.amount_received / 100}.`,
        html: `<p>Merci pour votre inscription d'un montant de ${paymentIntent.amount_received / 100}.</p>`
    };

    await transporter.sendMail(emailData);
}