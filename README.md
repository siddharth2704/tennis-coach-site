# ProTennis Coaching Website

A professional tennis coach website built with Next.js, Tailwind CSS, and Supabase. Features a clean, athlete-focused design, service listings, and a fully functional session booking system.

## Tech Stack
- Frontend: Next.js (App Router), React, Tailwind CSS
- Backend API: Next.js Route Handlers
- Database: Supabase (PostgreSQL)
- Deployment: Vercel

## Local Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd tennis-coach-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env.local` file in the root directory and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com).
3. Create a **New Project** and import your GitHub repository.
4. During the setup, expand the **Environment Variables** section.
5. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` with your Supabase values.
6. Click **Deploy**. Vercel will automatically build and host your Next.js application.

## Database Setup (Supabase)

Run the following SQL in your Supabase project's SQL Editor to create the necessary table and security policies:

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE bookings (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name text NOT NULL,
    phone text NOT NULL,
    date date NOT NULL,
    time text NOT NULL,
    created_at timestamp DEFAULT now(),
    UNIQUE(date, time)
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read" ON bookings FOR SELECT USING (true);
```
