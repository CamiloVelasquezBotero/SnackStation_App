# SnackStation 🍪🍔🍕

![Status](https://img.shields.io/badge/Status-Work_in_Progress-yellow?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-433E38?style=for-the-badge&logo=react&logoColor=white)

Self-service ordering system for a food kiosk, built to streamline order-taking and kitchen management for a venue selling coffee, hamburgers, pizzas, donuts, cakes, and cookies.

The project is split into two modules:

- **SnackStation Kiosk** — customer-facing touchscreen interface for browsing categories, building an order, and checking out.
- **SnackStation Admin** — kitchen/orders management panel (KDS-style) for staff to view and manage incoming orders.

## Tech Stack

- **[Next.js](https://nextjs.org/)** (App Router) — Server Components, Server Actions
- **[Prisma](https://www.prisma.io/)** — ORM for PostgreSQL
- **[PostgreSQL](https://www.postgresql.org/)** — database
- **[Zustand](https://github.com/pmndrs/zustand)** — client-side state management (order/cart)
- **[Tailwind CSS](https://tailwindcss.com/)** — styling
- **TypeScript**

## Features

- Browse products by category (coffee, burgers, pizza, donuts, cakes, cookies)
- Add/remove items and adjust quantities in the cart
- Order summary with subtotal calculation
- Kitchen-facing order management (Admin panel)

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL database (local or hosted)

### Installation

```bash
git clone https://github.com/CamiloVelasquezBotero/SnackStation_App.git
cd SnackStation_App
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/snackstation"
```

### Database Setup

Run migrations and seed the database with initial categories and products:

```bash
npx prisma migrate dev
npx prisma db seed
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
snackstation-next/
├── prisma/
│   ├── schema.prisma      # Database schema
│   ├── seed.ts            # Seed script (categories & products)
│   └── data/               # Seed data
├── src/
│   ├── app/                # App Router pages & layouts
│   ├── components/         # Reusable UI components
│   ├── store/               # Zustand store(s)
│   └── generated/prisma/    # Generated Prisma Client
├── prisma.config.ts
└── package.json
```

## Roadmap

- [ ] Finalize Kiosk screen flow and UI design
- [ ] Implement checkout / order submission via Server Actions
- [ ] Build Admin panel for order management
- [ ] Add order status tracking (received → preparing → ready)

## Author

**Camilo Velásquez Botero**
Web Developer