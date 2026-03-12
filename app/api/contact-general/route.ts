import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { civilite, lastName, firstName, telephone, email, source, message } = body;

    // 1. Envoi de l'email à l'agence
    const { error: resendError } = await resend.emails.send({
      from: 'Merci Immobilier <contact@merci-immobilier.com>',
      to: ['contact@merci-immobilier.com'],
      replyTo: email,
      subject: `[CONTACT GÉNÉRAL] ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #0f766e; border-bottom: 2px solid #0f766e; padding-bottom: 10px;">Nouveau Message Site Web</h2>
          <p><strong>Identité :</strong> ${civilite} ${firstName} ${lastName}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Tél :</strong> ${telephone}</p>
          <p><strong>Origine :</strong> ${source}</p>
          <div style="background: #f9f9f9; padding: 15px; margin-top: 20px; border-left: 4px solid #0f766e;">
            <p style="margin: 0; white-space: pre-wrap;"><strong>Message :</strong><br/>${message}</p>
          </div>
        </div>
      `,
    });

    if (resendError) return NextResponse.json({ error: resendError }, { status: 400 });

    // 2. OPTIONNEL : Envoi de la copie au client (comme promis dans ton texte)
    await resend.emails.send({
        from: 'Merci Immobilier <contact@merci-immobilier.com>',
        to: [email],
        subject: `Copie de votre demande - Merci Immobilier`,
        html: `<p>Bonjour ${firstName}, nous avons bien reçu votre message et reviendrons vers vous rapidement.</p><hr/><p>${message}</p>`
    });

    return NextResponse.json({ success: true });

  } catch (err: any) {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}