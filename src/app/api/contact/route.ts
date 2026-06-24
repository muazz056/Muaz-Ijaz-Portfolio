import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const BREVO_API_KEY = (process.env.BREVO_API_KEY || '').trim();
    // Debug logging for deployment environment
    if (!BREVO_API_KEY) {
      console.warn('⚠️ Brevo API key is missing. Check Vercel env configuration.');
    } else {
      console.log('✅ Brevo API key loaded (length:', BREVO_API_KEY.length, ')');
    }

    // Log configuration for debugging (avoid logging the actual API key)
    if (!BREVO_API_KEY) {
      console.warn('Brevo API key is missing. Check your .env configuration.');
    } else {
      console.log('Brevo configuration loaded.');
    }

    const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || 'muaxijaz@gmail.com';
    const BREVO_SENDER_NAME = process.env.BREVO_SENDER_NAME || 'Muaz Ijaz';
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'muaxijaz@gmail.com';

    if (!BREVO_API_KEY) {
      console.log('Contact form submission (Brevo not configured):', data);
      return NextResponse.json(
        { success: true, message: 'Message received' },
        { status: 200 }
      );
    }

    const emailPayload = {
      sender: { name: BREVO_SENDER_NAME, email: BREVO_SENDER_EMAIL },
      to: [{ email: CONTACT_EMAIL }],
      replyTo: { email: data.email, name: data.name },
      subject: `New Contact from ${data.name} — Portfolio`,
      htmlContent: `
        <html>
        <head>
          <style>
            body {font-family: Arial, Helvetica, sans-serif; background: #f4f7f9; color: #333; margin:0; padding:20px;}
            .container {max-width:600px; margin:auto; background:#fff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.1);}
            .header {background:#4a90e2; color:#fff; padding:20px; text-align:center; font-size:22px;}
            .content {padding:20px; line-height:1.6;}
            .content p {margin:0 0 10px;}
            .footer {background:#f0f0f0; color:#777; text-align:center; padding:10px; font-size:12px;}
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">New Contact Form Submission</div>
            <div class="content">
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
              ${data.project ? `<p><strong>Project Type:</strong> ${data.project}</p>` : ''}
              ${data.budget ? `<p><strong>Budget:</strong> ${data.budget}</p>` : ''}
              ${data.timeline ? `<p><strong>Timeline:</strong> ${data.timeline}</p>` : ''}
              <p><strong>Message:</strong></p>
              <p>${data.message}</p>
            </div>
            <div class="footer">© ${new Date().getFullYear()} Muaz Ijaz Portfolio</div>
          </div>
        </body>
        </html>`,
    };

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(emailPayload),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('❌ Brevo request failed. Status:', response.status, 'Body:', errorBody);
      return NextResponse.json(
        { error: 'Failed to send message via Brevo', details: errorBody },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
