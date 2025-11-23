# Next Shop

Next Shop is a modern **Next.js 16** project that serves as a small online
shopping / product management system. The project uses **NextAuth.js** for user
authentication and **MongoDB** for data storage.

---

## Features

- User registration and login
  - Email & password (CredentialsProvider)
  - Google OAuth login
- Protected routes
  - Only logged-in users can view or manage products
- Product CRUD
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
