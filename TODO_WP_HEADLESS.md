# Headless WordPress CMS for Nexus Brands (Local-first)

## Goals
- Run WordPress locally with REST API enabled.
- Configure content model for:
  - Projects (CPT `project`) for **/our-work/[slug]**
  - Blog (WP `post` or CPT `blog`) for **/blog/[slug]**
- Expose required fields via REST so the Next.js app can fetch them.
- Provide Next.js fetch helpers + page wiring (headless).

## Step-by-step (what to do next)
1. Pick blog strategy (default `post` vs CPT `blog`).
2. Local WordPress setup:
   - Option 1: Docker Compose (recommended)
   - Option 2: WP + local host (not recommended)
3. REST/perm configs:
   - Verify `GET /wp-json/` works.
   - Ensure CPT `project` is public via REST.
4. Create fields (recommended via ACF):
   - client, industry, timeline
   - description, challenge, solution, outcome
   - services (repeater)
   - images (gallery)
5. Map data shapes expected by Next.js components.
6. Next.js integration:
   - Add `lib/wp.ts`
   - Create/replace list+detail data fetches in:
     - `app/our-work/page.tsx`
     - `app/our-work/[slug]/page.tsx`
     - `app/blog/page.tsx`
     - `app/blog/[slug]/page.tsx`
   - Cache with ISR (`revalidate`).
7. Test locally end-to-end.
8. Later, when Spaceship is ready:
   - Set `NEXT_PUBLIC_WP_BASE_URL` to the Spaceship WP domain.
   - Redeploy Next.js + WordPress.

## Deliverables I will create in the repo
- `lib/wp.ts` (fetch wrapper)
- Next.js data wiring for blog & projects pages
- Optional: type definitions for WP responses

## Pending decision
- Blog strategy: default `post` vs CPT `blog`

