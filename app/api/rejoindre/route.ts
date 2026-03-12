import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Extraction des champs spécifiques au formulaire "Rejoindre"
    const { 
      civilite, 
      lastName, 
      firstName, 
      telephone, 
      email, 
      profil, 
      experience, 
      message 
    } = body;

    // 1. Envoi de l'email de candidature à l'agence
    const { error: resendError } = await resend.emails.send({
      from: 'Recrutement Merci Immobilier <contact@merci-immobilier.com>',
      to: ['contact@merci-immobilier.com'],
      replyTo: email,
      subject: `[CANDIDATURE] ${firstName} ${lastName} - Profil ${profil}`,
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #0f766e; border-bottom: 2px solid #0f766e; padding-bottom: 10px;">Nouvelle Candidature Agent</h2>
          
          <div style="margin-bottom: 20px;">
            <p><strong>Candidat :</strong> ${civilite} ${firstName} ${lastName}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Téléphone :</strong> ${telephone}</p>
          </div>

          <div style="background: #f0fdfa; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
            <p style="margin: 0;"><strong>Profil :</strong> ${profil.toUpperCase()}</p>
            <p style="margin: 5px 0 0 0;"><strong>Expérience :</strong> ${experience} an(s)</p>
          </div>

          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #0f766e;">
            <p style="margin: 0; white-space: pre-wrap;"><strong>Motivations :</strong><br/><br/>${message}</p>
          </div>
          
          <p style="font-size: 11px; color: #999; margin-top: 30px;">
            Candidature envoyée depuis le formulaire "Rejoindre" du site web.
          </p>
        </div>
      `,
    });

    if (resendError) {
      console.error("Erreur Resend (Agence):", resendError);
      return NextResponse.json({ error: resendError }, { status: 400 });
    }

    // 2. Envoi de l'accusé de réception au candidat
    try {
      await resend.emails.send({
        from: 'Merci Immobilier <contact@merci-immobilier.com>',
        to: [email],
        subject: `Merci pour votre candidature - Merci Immobilier`,
        html: `
          <div style="font-family: sans-serif; color: #333;">
            <p>Bonjour ${firstName},</p>
            <p>Nous avons bien reçu votre demande pour rejoindre notre réseau en tant qu'agent commercial.</p>
            <p>Votre profil est en cours d'étude par notre équipe. Nous reviendrons vers vous très prochainement pour échanger sur votre projet.</p>
            <br/>
            <p>Cordialement,</p>
            <p><strong>L'équipe Merci Immobilier</strong></p>
          </div>
        `
      });
    } catch (emailCopyError) {
      // On ne bloque pas la réponse si seule la copie échoue
      console.error("Erreur lors de l'envoi de la copie au candidat:", emailCopyError);
    }

    return NextResponse.json({ success: true });

  } catch (err: any) {
    console.error("Erreur serveur API Recrutement:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}