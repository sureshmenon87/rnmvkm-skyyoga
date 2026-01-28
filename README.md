# 🧘 RNMVKM SKY Yoga – Programs Platform

A modern, scalable web platform built to manage and display SKY Yoga programs for RNMVKM, designed with **long-term maintainability**, **cost efficiency**, and **mobile-first delivery** in mind.

This project demonstrates **real-world frontend architecture**, **Firebase best practices**, and **future-ready design decisions** suitable for production systems.

---

## ✨ Project Vision

The goal of this project is to:

- Provide a **clean, accessible interface** for users to view SKY Yoga programs
- Keep operational complexity **low and sustainable**
- Avoid unnecessary rework while enabling **future mobile expansion**
- Follow **industry-grade architectural patterns** used in professional teams

The application is intentionally designed to grow **without architectural rewrites**.

---

## 🧠 Key Design Principles

- **Server-first data fetching** for performance and security
- **Minimal client-side logic**
- **Cost-aware Firestore usage**
- **Explicit separation of concerns**
- **Mobile-first UX**, deployable inside Android WebView
- **Future React Native compatibility**

---

## 🧱 Tech Stack

### Frontend

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**

### Backend / Data

- **Firebase Cloud Firestore**
- **Firebase Admin SDK** (scripts only)

### Tooling

- Node.js
- TS-based seed scripts
- Git-based monthly data management

---

## 🗂️ Repository Scope

This repository contains:

- Frontend application (Next.js)
- Firestore read logic
- One-time and monthly **data seed scripts**
- Shared data models and utilities

❌ No backend server
❌ No continuous background jobs
❌ No client-side database writes

---

## 📐 Architecture Overview

### Server vs Client Responsibility

The project strictly follows **Next.js App Router best practices**.

#### Server Components

- Fetch data from Firestore
- Convert Firestore-specific types (e.g. `Timestamp`)
- Return **plain serializable objects**

#### Client Components

- Handle UI interactions
- Render mobile accordions & desktop layouts
- Contain **zero Firestore logic**

This avoids common issues such as:

- `async Client Component` errors
- Firestore `Timestamp` serialization crashes
- Hydration mismatches

---

## 🔥 Firestore Strategy

### Database

- **Cloud Firestore (Standard Edition)**
- Region selected once (production-ready)
- Optimized for **read-heavy workloads**

### Security Rules

```js
match /programs/{id} {
  allow read: if true;
  allow write: if false;
}
```

- Public **read-only access**
- Writes allowed only via:
  - Firebase Console
  - Admin SDK seed scripts

This keeps the frontend **secure and predictable**.

---

## 🧾 Data Model

```ts
export interface Program {
  id: string;
  title: string;
  programType: "single" | "range";
  startDate: string;
  endDate?: string;
  time?: string;
  day?: string;
  days?: number[];
  location?: {
    name?: string;
    address?: string;
    mapUrl?: string;
  };
  instructors?: string[];
  description?: string;
  contacts?: string[];
  cancelled?: boolean;
  createdAt?: string;
}
```

### Why this design?

- All dates passed to client as **strings**
- `time` stored as string for **Tamil-language flexibility**
- No logic depends on Firestore document IDs
- Model is **React Native–friendly**

---

## 📊 Querying & Performance

### Strategy

- Fetch **only current month programs**
- Avoid unnecessary reads
- Keep Firestore costs minimal

### Query Pattern

- `where(startDate >= firstDayOfMonth)`
- `orderBy(startDate)`

This requires a **composite index**, created once via Firestore Console.

---

## 🌱 Data Seeding Strategy

### What we intentionally avoid

- ❌ Continuous seeding
- ❌ Client-side writes
- ❌ Polling / listeners
- ❌ Auto-refresh logic

### Final Approach

- One seed file per month:

```
data/programs/programs.2026-01.ts
```

- Run once using Admin SDK
- Mid-month changes handled **directly via Firebase Console**

This mirrors how **real production systems** are operated.

---

## 📁 Folder Structure

```
app/
  components/
  lib/
    firebase.ts
    programs.ts
  programs/
    page.tsx           // Server Component
scripts
  seed-programs.ts
seed-data/
  programs/
    index.ts
    programs.2026-01.ts
    programs.2026-02.ts



scripts/
  seedPrograms.ts

serviceAccountKey.json (gitignored)
```

### Organization Philosophy

- Firestore access lives in `lib/`
- UI logic lives in `components/`
- Scripts are isolated and never bundled

---

## 🔐 Firebase Credentials Safety

- `NEXT_PUBLIC_*` keys are **safe by design**
- Admin SDK credentials:
  - Used **only in scripts**
  - Never imported into app code
  - Added to `.gitignore`

---

Prerequisites

Firebase Admin SDK credentials configured

GOOGLE_APPLICATION_CREDENTIALS environment variable set to the service account JSON file

How to Run the Seed Script

- From the project root:

```
npx tsx scripts/seed-programs.ts
```

## 📱 Mobile Strategy

### Phase 1 (Current)

- Next.js app deployed inside **Android WebView**
- Tailwind CSS works reliably in WebView
- Mobile-first layouts using accordion patterns

## 📌 Status

- Firestore connected ✅
- Programs collection live ✅
- Index strategy finalized ✅
- Architecture stabilized ✅

---
