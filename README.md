# 🍔 SnackStation Kiosk & KDS

<div align="center">
  <img src="https://img.shields.io/badge/Status-Completed-success?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/Zustand-433E38?style=for-the-badge&logo=react&logoColor=white" alt="Zustand" />
</div>

<br />

**SnackStation** is a modern, responsive, full-stack self-service ordering system designed for food kiosks and restaurants. It streamlines the order-taking process for customers and provides a robust Kitchen Display System (KDS) for staff to manage incoming orders in real-time.

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Architecture & Patterns](#-architecture--patterns)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Author](#-author)

---

## 🎯 Overview

SnackStation is split into three seamless modules:

1. **Customer Kiosk Interface (`/order/coffee`):** A highly interactive, touch-friendly UI where customers can browse categories (coffee, burgers, pizzas, etc.), customize their orders, and checkout effortlessly.
2. **Admin Panel (`/admin/orders` and `/admin/products`):** A secure, real-time Kitchen Display System that allows restaurant staff to view incoming orders, track their status (Received → Preparing → Ready), and mark them as completed.
3. **Public Orders Screen (`/orders`):** A customer-facing digital display board that shows which orders are currently being prepared and which are ready to be claimed.

## ✨ Key Features

### 🛒 Customer Kiosk
- **Intuitive Navigation:** Browse products categorized seamlessly for quick access.
- **Cart Management:** Add, remove, and adjust item quantities dynamically.
- **Order Summary:** Real-time subtotal calculation and transparent checkout flow.
- **Responsive UI:** Optimized for tablet/kiosk screens with fluid animations and responsive design.

### 👨‍🍳 Admin Panel (KDS)
- **Real-Time Order Tracking:** See new orders pop up instantly without refreshing.
- **Order Lifecycle Management:** Update order statuses to keep the kitchen organized.
- **Dashboard Metrics:** Track sales and popular items.
- **Secure Access:** Protected routes for staff members.

### 📺 Public Orders Display (`/orders`)
- **Live Status Updates:** Customers can see in real-time when their order moves from "Preparing" to "Ready".
- **Visual Callouts:** Clear visual cues when an order is ready to be claimed, reducing wait-time confusion.

## 🛠 Tech Stack

Built with modern web development best practices:

- **Frontend:** [Next.js (App Router)](https://nextjs.org/), React 19, [Tailwind CSS v4](https://tailwindcss.com/)
- **Backend:** Next.js Server Actions & API Routes
- **Database:** [PostgreSQL](https://www.postgresql.org/) managed via [Prisma ORM](https://www.prisma.io/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand) (Client state), [SWR](https://swr.vercel.app/) (Data fetching)
- **Validation:** [Zod](https://zod.dev/)
- **Media Management:** [Next Cloudinary](https://next.cloudinary.dev/)
- **UI & Icons:** React Toastify, React Icons, Heroicons

## 🏗 Architecture & Patterns

- **Server-Side Rendering (SSR) & Server Components:** Utilized Next.js App Router to maximize performance and SEO.
- **Server Actions:** Secure, Javascript-less form submissions and mutations directly from the server.
- **Optimistic UI Updates:** Instant feedback on the KDS panel when changing order statuses.
- **Type Safety:** End-to-end type safety with TypeScript, Prisma, and Zod.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v20 or higher)
- [PostgreSQL](https://www.postgresql.org/) (Local instance or cloud provider like Supabase/Neon)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/CamiloVelasquezBotero/SnackStation_App.git
   cd SnackStation_App
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory and configure your database and cloudinary variables:
   ```env
   # Database connection string
   DATABASE_URL="postgresql://user:password@localhost:5432/snackstation"
   
   # Cloudinary integration (if applicable)
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
   ```

4. **Database Setup:**
   Run migrations and seed the database with initial categories and products:
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the Kiosk app. Admin routes are typically at `/admin`.

## 📁 Project Structure

```text
snackstation-next/
├── actions/                # Server Actions (form submissions, DB mutations)
├── app/                    # Next.js App Router (Pages, Layouts, API)
│   ├── admin/              # Admin/KDS protected routes
│   ├── order/              # Kiosk customer-facing routes
│   └── orders/             # Public screen for ready orders
├── components/             # Reusable UI components (Buttons, Modals, Cards)
├── prisma/                 # Database schema & seed data
├── public/                 # Static assets (images, icons)
├── src/                    # App utilities & configurations
│   ├── lib/                # Library configurations (e.g., Prisma client config)
│   ├── store.ts            # Zustand global state (Cart, UI state)
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Helper functions
│   └── zodSchema/          # Zod validation schemas
└── package.json            # Project dependencies & scripts
```

## 📸 Screenshots

<details>
<summary>Click to view screenshots</summary>

- **Kiosk Main Screen:** ![Kiosk Screen](public/screenshots/kiosk.png)
- **Admin Dashboard Orders:** ![Admin Orders Screen](public/screenshots/order.png)
- **Admin Dashboard Products:** ![Admin Products Panel](public/screenshots/products.png)
- **Public Orders Screen:** ![Orders Screen](public/screenshots/orders.png)

</details>

## 👨‍💻 Author

**Camilo Velásquez Botero**  
Full Stack Web Developer  
- [GitHub](https://github.com/CamiloVelasquezBotero)
- [LinkedIn](https://www.linkedin.com/in/camilodeveloper)

---
*If you liked this project, please consider giving it a ⭐ on GitHub!*