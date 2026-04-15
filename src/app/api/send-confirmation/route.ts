import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { SITE_CONFIG } from "@/lib/config";

const unitNames: Record<string, string> = {
  studio: "Studio - 1 Ambiente (36 m²)",
  "dos-ambientes": "2 Ambientes (50 m²)",
};

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, firstName, lastName, unitType, checkIn, checkOut, guests, paymentMethod } = body;

  const unitName = unitNames[unitType] || unitType;
  const paymentLabel =
    paymentMethod === "guarantee"
      ? "Tarjeta en garantía (pago en destino)"
      : "Pago completo realizado";

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; color: #2C2C2C; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; }
        .header { background: #2C2C2C; color: white; padding: 40px 30px; text-align: center; }
        .header h1 { font-weight: 300; letter-spacing: 0.2em; margin: 0; font-size: 24px; }
        .header p { color: #C9A96E; font-size: 11px; letter-spacing: 0.4em; margin-top: 8px; text-transform: uppercase; }
        .content { padding: 40px 30px; background: #FAF9F6; }
        .detail-row { display: flex; padding: 12px 0; border-bottom: 1px solid #C9A96E20; }
        .detail-label { color: #6B6560; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 140px; }
        .detail-value { color: #2C2C2C; font-weight: 500; }
        .footer { padding: 30px; text-align: center; font-size: 12px; color: #6B6560; background: #F5F0E8; }
        .gold-line { height: 2px; background: #C9A96E; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>THE LIVING ROOM</h1>
          <p>Hotel Boutique &middot; Palermo Soho</p>
        </div>
        <div class="content">
          <h2 style="font-weight: 300; font-size: 22px;">Hola ${firstName},</h2>
          <p>¡Tu reserva ha sido confirmada! A continuación encontrarás los detalles:</p>
          <div class="gold-line"></div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; color: #6B6560; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #C9A96E20;">Unidad</td>
              <td style="padding: 12px 0; font-weight: 500; border-bottom: 1px solid #C9A96E20;">${unitName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #6B6560; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #C9A96E20;">Check-in</td>
              <td style="padding: 12px 0; font-weight: 500; border-bottom: 1px solid #C9A96E20;">${checkIn} - 15:00 hs</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #6B6560; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #C9A96E20;">Check-out</td>
              <td style="padding: 12px 0; font-weight: 500; border-bottom: 1px solid #C9A96E20;">${checkOut} - 11:00 hs</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #6B6560; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #C9A96E20;">Huéspedes</td>
              <td style="padding: 12px 0; font-weight: 500; border-bottom: 1px solid #C9A96E20;">${guests}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #6B6560; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #C9A96E20;">Método de pago</td>
              <td style="padding: 12px 0; font-weight: 500; border-bottom: 1px solid #C9A96E20;">${paymentLabel}</td>
            </tr>
          </table>

          <div class="gold-line"></div>
          <p style="font-size: 14px;">Si tenés alguna consulta, no dudes en contactarnos por WhatsApp o email.</p>
          <p style="font-size: 14px;">¡Te esperamos!</p>
          <p style="font-size: 14px; color: #C9A96E;">Equipo The Living</p>
        </div>
        <div class="footer">
          <p>The Living &middot; Palermo Soho, Buenos Aires</p>
          <p>${SITE_CONFIG.email} &middot; ${SITE_CONFIG.phone}</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // If SMTP is configured, send real email
  if (SITE_CONFIG.email_smtp.host && SITE_CONFIG.email_smtp.user) {
    try {
      const transporter = nodemailer.createTransport({
        host: SITE_CONFIG.email_smtp.host,
        port: SITE_CONFIG.email_smtp.port,
        secure: SITE_CONFIG.email_smtp.port === 465,
        auth: {
          user: SITE_CONFIG.email_smtp.user,
          pass: SITE_CONFIG.email_smtp.pass,
        },
      });

      await transporter.sendMail({
        from: `"The Living" <${SITE_CONFIG.email_smtp.from}>`,
        to: email,
        subject: `Confirmación de Reserva - The Living | ${checkIn}`,
        html: htmlContent,
      });

      return NextResponse.json({ sent: true });
    } catch (error) {
      console.error("Email send error:", error);
      return NextResponse.json(
        { error: "Error sending email" },
        { status: 500 }
      );
    }
  }

  // Demo mode
  return NextResponse.json({
    sent: false,
    type: "demo",
    message: "SMTP not configured. Email would be sent in production.",
    preview: htmlContent,
  });
}
