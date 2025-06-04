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

export async function sendEmail(email: string): Promise<void> {

    const emailData = {
        from: '"F*cking World" <contact@studio-cesi.fr>',
        to: email,
        subject: "Réservation confirmée pour l'évènement F*cking World",
        text: `Merci pour votre inscription, nous vous recontacterons avec plus d'informations prochainement. Rendez vous le 20 juin 2025 à 20h00 au bar Tempête !`,
        html: `<p>Merci pour votre inscription, nous vous recontacterons avec plus d'informations prochainement.</p><br><p>Rendez vous le 20 juin 2025 à 20h00 au bar Tempête !</p>`
    };

    await transporter.sendMail(emailData);
}