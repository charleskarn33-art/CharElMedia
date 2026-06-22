# CharEl Media Group - Deployment Guide

## Stack
- **Frontend**: Next.js 15 + TypeScript + Tailwind CSS
- **Backend/Auth/DB**: Supabase
- **Deployment**: Vercel

---

## 1. Supabase Setup

1. Go to supabase.com and create a new project
2. Navigate to **SQL Editor** and run the full schema: `supabase/schema.sql`
3. Create Storage Buckets in **Storage** settings:
   - `photos` (private)
   - `albums` (private)
   - `audio` (private)
   - `podcast` (private)
   - `printing` (private)
   - `customer_uploads` (private)
   - `documents` (private)
4. Copy your **Project URL** and **Anon Key** from Project Settings -> API

---

## 2. Environment Variables

Create a `.env.local` file (use `.env.local.example` as a template):

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
RESEND_API_KEY=your-resend-api-key
EMAIL_FROM=noreply@charelmedia.com
NEXT_PUBLIC_APP_URL=https://charelmedia.com
```

---

## 3. Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit `http://localhost:3000`

---

## 4. Vercel Deployment

1. Push code to GitHub
2. Import repo at vercel.com/new
3. Add all environment variables in Vercel project settings
4. Deploy

### Custom Domain
- Add your domain in Vercel -> Domains
- Update DNS at your registrar to point to Vercel

---

## 5. Admin Access

After deployment:
1. Create your first user account via `/auth/register`
2. In Supabase SQL Editor, run:
   ```sql
   UPDATE public.profiles SET role = 'admin' WHERE email = 'your@email.com';
   ```
3. Access admin panel at `/admin`

---

## 6. Email Notifications

1. Create account at resend.com
2. Add and verify your domain
3. Create API key and add to env vars

---

## 7. Mobile App Readiness

All data is served through Supabase APIs. Future Flutter/React Native apps can:
- Use `@supabase/supabase-flutter` or `supabase-js`
- Authenticate with the same Supabase project
- Access all tables through the same Row Level Security policies

---

## File Structure

```
src/
+-- app/
|   +-- (public)/          # Public website pages
|   |   +-- page.tsx       # Home
|   |   +-- about/
|   |   +-- services/
|   |   +-- podcast/
|   |   +-- photography/
|   |   +-- recording/
|   |   +-- printing/
|   |   +-- gallery/
|   |   +-- pricing/
|   |   +-- contact/
|   |   +-- book/
|   +-- auth/              # Auth pages (login, register, callback)
|   +-- portal/            # Client portal (protected)
|   +-- admin/             # Admin dashboard (protected)
+-- components/
|   +-- ui/                # Reusable UI components
|   +-- layout/            # Navbar, Footer
|   +-- home/              # Home page sections
+-- lib/
|   +-- supabase/          # Supabase client/server/middleware
|   +-- utils.ts
+-- types/
    +-- database.ts        # Full TypeScript types for Supabase
```
