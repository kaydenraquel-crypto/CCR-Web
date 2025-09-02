export async function POST(req) {
  const formData = await req.formData();
  const data = Object.fromEntries(formData.entries());

  // TODO: Integrate with Zoho (or your future CRM) here.
  console.log("Service request received:", data);

  const html = `
    <html>
      <head>
        <meta http-equiv="refresh" content="3; url=/contact" />
        <style>
          body { font-family: ui-sans-serif, system-ui; padding: 2rem; }
          .box { max-width: 640px; margin: 2rem auto; border: 1px solid #e5e7eb; border-radius: 12px; padding: 1.5rem; }
        </style>
      </head>
      <body>
        <div class="box">
          <h1>Thanks! We received your request.</h1>
          <p>We'll be in touch shortly. You can close this tab or wait to be redirected.</p>
        </div>
      </body>
    </html>
  `;
  return new Response(html, { headers: { "Content-Type": "text/html" } });
}
