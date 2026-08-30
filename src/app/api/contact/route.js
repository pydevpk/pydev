import nodemailer from "nodemailer";

const clean = (v, max) => String(v ?? "").trim().slice(0, max);
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return json({ message: "Invalid request body." }, 400);
  }

  // Honeypot — bots fill hidden fields; humans don't.
  if (clean(body.company, 100)) {
    return json({ success: true, message: "Form submitted!" }, 200);
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const message = clean(body.message, 5000);

  if (!name || !email || !message) {
    return json({ message: "All fields are required." }, 400);
  }
  if (!isEmail(email)) {
    return json({ message: "Please provide a valid email address." }, 400);
  }
  if (message.length < 10) {
    return json({ message: "Message is too short." }, 400);
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    console.error("contact: GMAIL_USER / GMAIL_PASS not configured");
    return json(
      { message: "Mail service is not configured. Please email directly." },
      500
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Portfolio contact — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return json({ success: true, message: "Form submitted!" }, 200);
  } catch (error) {
    console.error("contact: send failed", error);
    return json({ message: "Could not send your message right now." }, 500);
  }
}
