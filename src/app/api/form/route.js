// app/api/contact/route.js
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const msg = {
      to: 'solace@solace.com.tr',
      from: {
        email: 'solace@solace.com.tr',
        name: 'Solace Smart Technologies',
      },
      replyTo: email,
      subject: '2 - Yeni Form Dolduruldu',
      text: `Isim: ${name}\nEmail: ${email}\nMesaj: ${message}`,
    };

    await sgMail.send(msg);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
