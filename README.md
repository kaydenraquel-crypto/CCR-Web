# Colorado Commercial Repairs LLC — Website Starter (Next.js + Tailwind)

A modern, SEO-friendly starter ready for Azure Static Web Apps (or Azure App Service).

## What’s inside
- Next.js App Router + Tailwind CSS
- Home, Services, About, Contact, Customer Portal (placeholder)
- CTA buttons for **Request Service** and **After Hours / Emergency**
- SEO metadata + JSON-LD LocalBusiness schema
- Placeholder API route (`/api/request-service`) to receive form submissions
- Clean, mobile-first UI with room for **photos** and **reviews**
- Future-proof hooks for CRM/Zoho integration and a custom AI assistant

---

## What we're doing (at a glance)
- Building a clean, modern website for **Colorado Commercial Repairs LLC** with strong SEO foundations.
- Enabling customers to submit **service requests** and **after-hours emergencies**.
- Preparing a **Customer Portal** placeholder to integrate with **Zoho** (and later your custom CRM/AI).
- Targeting **Grand Junction & Western Colorado** with appropriate local SEO metadata.

---

## Quick Start (Local)

```bash
# 1) Install deps (Node 18+ recommended)
npm install

# 2) Run dev server
npm run dev

# 3) Visit
http://localhost:3000
```

---

## Deploy to Azure Static Web Apps (SWA)

1. Push this folder to a **new GitHub repo**.
2. In the Azure Portal: **Create Resource → Static Web App**.
3. Choose **GitHub** as the source, select your org/repo/branch.
4. For **build config**, set:
   - App location: `/`
   - Output location: `.next` (SWA detects Next.js and handles SSR)
5. Azure will create a **GitHub Actions** workflow automatically and deploy on each push.

> **Note:** SWA handles Next.js 13/14 (App Router) using the default build; no extra config needed.

### Custom Domain & HTTPS
- Use SWA → **Custom Domains** to add your domain; free SSL certs are provisioned automatically.

### Environment Variables
- Put build-time secrets in GitHub → **Settings → Secrets → Actions** (e.g., API keys).
- Put runtime variables in SWA → **Configuration**.

---

## Optional: Azure App Service (Node server)

If you prefer App Service instead of SWA:
- Create **App Service** → Deployment Center → connect GitHub repo.
- App Service will build and run Next.js with `npm run build && npm start`.

---

## CRM / Zoho Integration (Later)

Replace the `/app/api/request-service/route.js` handler with:
- A direct POST to Zoho CRM/Desk/Creator endpoint, or
- An Azure Function (Serverless) that forwards to your CRM, or
- Your **custom CRM/AI** endpoint when ready.

You can also connect the form to a simple email service to notify your team immediately.

---

## Project Structure
See `REPO_STRUCTURE.md` for a tree view. Key directories:

- `app/` — routes (App Router), API handlers, and pages
- `components/` — reusable UI
- `app/api/` — server route handlers
- `app/(pages)/` — page routes
- `app/globals.css` — Tailwind stylesheet

---

## SEO Notes
- Titles & descriptions set in `app/layout.js` and per-page metadata.
- JSON-LD LocalBusiness schema on the **Home page** for better local SEO.
- Use specific service/industry keywords in Services and future blog posts (e.g., _Grand Junction HVAC service_, _Western Colorado refrigeration repair_, _forklift maintenance Grand Junction_).

---

## Future Enhancements
- Image gallery & testimonials component
- Blog for SEO (case studies, tips, service highlights)
- Customer Portal with auth (Zoho or your platform)
- After-hours banner with click-to-call and SMS
- AI assistant widget (once your Zoho alternative is ready)

---

## License
You own this content. Use it commercially without restriction.
