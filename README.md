# Court IQ

Court IQ is a production-style Next.js basketball intelligence platform that helps players understand role responsibilities, improve reads, study film, and manage recovery with medically careful guidance.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Component + data-driven architecture

## Run
```bash
npm install
npm run dev
```

## Routes
- `/` Landing page
- `/dashboard`
- `/profile`
- `/coach`
- `/practice-breakdown`
- `/play-encyclopedia`
- `/defense`
- `/drills`
- `/recovery`
- `/film-study`
- `/quiz`
- `/planner`
- `/admin`

## App Architecture
- `app/*`: route pages and layout
- `components/layout`: navigation and shell
- `components/ui`: reusable design primitives
- `data/*`: mock V1 datasets designed for API replacement in V2
- `lib/types.ts`: shared domain types

## Recovery + Injury Intelligence Safety Position
Court IQ is educational decision-support software. It does not diagnose injuries and does not replace a physician, physical therapist, athletic trainer, or emergency services.
