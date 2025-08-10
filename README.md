# 🍔 FoodRush - Food Delivery App (Next.js)

🔗 **Live Demo:** https://food-delivery-app-xi-one.vercel.app/

---

## 📌 Introduction

**FoodRush** is a responsive food delivery web app built using **Next.js** and **Tailwind CSS.**
It simulates a smooth online ordering experience for a restaurant brand. Users can browse menus, add items to a cart, and proceed to checkout — all in a clean, mobile-first interface with **server-side rendering** for better SEO and performance.

---

## ⚙️ Features

⚙️ Features
🏠 **Home Page:** Promotions banner, category filter, and featured items.

📋 **Menu Page:** View all food items with filtering by category.

➕ **Add to Cart:** Add items with quantity control.

🛒 **Cart Page:** View selected items, update quantities, remove items.

💳 **Checkout Page:** Bonus page for placing orders (no payment logic).

🔁 **Reusable Components:** Modular design for scalability.

---

## 🛠 Technologies Used

⚛️ Next.js (App Router)

💨 Tailwind CSS

🧭 Next.js Navigation

💾 React Context API (Cart State Management)

⚡ Vercel Deployment

---

## 📁 Project Structure

```

src/
├── app/               # Next.js App Router pages
│   ├── layout.jsx     # Root layout
│   ├── page.jsx       # Home page
│   ├── menu/page.jsx  # Menu page
│   ├── cart/page.jsx  # Cart page
│   └── checkout/page.jsx # Checkout page
├── components/        # UI Components (Navbar, Footer, FoodCard, etc.)
├── context/           # Cart Context with state logic
├── assets/            # Icons/images
└── styles/            # Global styles (globals.css, Tailwind base)

---

## 🚀 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AnandKum4r/foodrush-app.git
   cd foodrush-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Visit in your browser:**
   (http://localhost:3000)

---

## 🙌 Credits

Built with ❤️ by Anand Kumar — React & Next.js Developer.
