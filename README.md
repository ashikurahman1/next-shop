# Next Shop

Next Shop is a modern **Next.js 16** project that serves as a small online
shopping and product management system. The project uses **NextAuth.js** for
user authentication and **MongoDB** for data storage.

---

## Features

- **User Registration and Login**
  - Email & password (CredentialsProvider)
  - Google OAuth login
- **Protected Routes**
  - Only logged-in users can view or manage products
- **Product CRUD**
  - Add, View, Manage, Delete products
- Smooth data loading with loader and suspense
- Responsive Navbar and Footer
- MongoDB for storing users and products
- JWT session strategy

---

## Tech Stack

- **Next.js 16 (App Router)**
- **NextAuth.js** (Credentials + Google Provider)
- **MongoDB** (via `mongodb` + `@next-auth/mongodb-adapter`)
- **React** (Server and Client Components)
- **TailwindCSS** & DaisyUI
- **SweetAlert2** for delete confirmation

---

## Setup & Installation

1. **Clone the repository**

```bash
git clone https://github.com/ashikurahman1/next-shop.git
cd next-shop
```

2. **Install dependencies**

```bash
  npm install
  # or
  yarn install
```

3. **Setup environment variables**

```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_generated_secret
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

## Route Summary

| Route                      | Description                 | Access    |
| -------------------------- | --------------------------- | --------- |
| `/`                        | Home page / Product listing | Public    |
| `/auth/login`              | User login page             | Public    |
| `/auth/register`           | User registration page      | Public    |
| `/dashboard`               | User dashboard              | Protected |
| `/dashboard/products`      | List of products (Manage)   | Protected |
| `/dashboard/products/add`  | Add a new product           | Protected |
| `/dashboard/products/[id]` | Edit / View product details | Protected |
