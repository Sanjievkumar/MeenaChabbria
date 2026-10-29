export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const { fullName, email, phone, sessionType, preferredDay, preferredTime, query } = req.body || {};

    if (!fullName || !email || !sessionType || !query) {
      return res.status(400).json({ error: 'Missing required fields (fullName, email, sessionType, query).' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address format.' });
    }

    console.log('[Booking Request Received]', {
      fullName,
      email,
      phone: phone || 'Not provided',
      sessionType,
      preferredDay: preferredDay || 'Flexible',
      preferredTime: preferredTime || 'Flexible',
      queryLength: query.length,
      receivedAt: new Date().toISOString()
    });

    // Optional webhook forwarding (e.g. Zapier, Slack, Formspree, Resend)
    const forwardWebhook = process.env.BOOKING_WEBHOOK_URL;
    if (forwardWebhook) {
      try {
        const webhookRes = await fetch(forwardWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(req.body)
        });
        if (!webhookRes.ok) {
          console.warn('Webhook forwarding returned non-200 status:', webhookRes.status);
        }
      } catch (webhookErr) {
        console.error('Webhook forwarding error:', webhookErr);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Booking request received successfully.',
      receivedAt: new Date().toISOString()
    });
  } catch (err) {
    console.error('Server error processing booking:', err);
    return res.status(500).json({ error: 'Internal server error while processing booking request.' });
  }
}
