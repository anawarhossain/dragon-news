yarn dev

# Dragon News

Dragon News is a modern, full-stack news portal web application built with a custom version of Next.js, React 19, and MongoDB. It features user authentication (email/password, Google, GitHub), dynamic news categories, detailed news pages, and a responsive, accessible UI using Tailwind CSS and DaisyUI.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Setup & Installation](#setup--installation)
- [Authentication](#authentication)
- [App Structure & Routing](#app-structure--routing)
- [Customization](#customization)
- [License](#license)

---

## Features

- **Dynamic News Categories:** Browse news by category, with data fetched from a public API.
- **News Details:** View detailed news articles with author info, images, and related category navigation.
- **Authentication:**
  - Email/password registration and login
  - Social login via Google and GitHub
- **Protected Routes:** News details and career pages require authentication.
- **Responsive UI:** Built with Tailwind CSS and DaisyUI for a modern, mobile-friendly experience.
- **Reusable Components:** Modular design with shared header, navbar, sidebars, and cards.
- **SEO & Metadata:** Dynamic page titles and sitemap support.

---

## Project Structure

```
AGENTS.md                # Next.js agent rules (read for breaking changes)
package.json             # Project dependencies and scripts
src/
  app/                   # App directory (Next.js routing)
	 (auth)/              # Auth pages (login, register)
	 (main)/              # Main app pages (category, news, about, career)
	 api/                 # API routes (auth)
  components/            # Reusable UI components
  lib/                   # Data fetching and auth logic
  assets/                # Static images and assets
  proxy.js               # Route protection logic
public/                  # Public static files
```

---

## Tech Stack

- **Framework:** Custom Next.js (see AGENTS.md for breaking changes)
- **Frontend:** React 19, Tailwind CSS, DaisyUI
- **Backend:** Next.js API routes, MongoDB (via better-auth)
- **Authentication:** better-auth, MongoDB adapter, Google & GitHub OAuth
- **Other:** react-hook-form, react-icons, react-fast-marquee

---

## Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd dragon-news
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or yarn install
   ```
3. **Environment Variables:**
   Create a `.env.local` file with the following (replace with your values):
   ```env
   MONGODB_AUTH_URL=your_mongodb_connection_string
   BETTER_AUTH_URL=http://localhost:3000/api/auth
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   # or yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Authentication

- **Email/Password:** Register and login via `/register` and `/login`.
- **Social Login:** Use Google or GitHub for quick sign-in.
- **Session Management:** Auth state is managed via `better-auth` and MongoDB.
- **Protected Routes:** `/news/[id]` and `/career` require authentication (see `src/proxy.js`).

---

## App Structure & Routing

- **Home:** Redirects to the default news category.
- **Categories:** `/category/[id]` shows news by category, with left sidebar navigation.
- **News Details:** `/news/[id]` shows full article details (protected route).
- **About & Career:** `/about-us` and `/career` for static info (career is protected).
- **Auth:** `/login` and `/register` for authentication.
- **Shared UI:** Header, breaking news ticker, navbar, and sidebars are present on all main pages.

---

## Customization

- **Styling:** Tailwind CSS and DaisyUI are used for rapid UI development.
- **Fonts:** Uses Geist and Poppins fonts from Google Fonts.
- **API:** News data is fetched from [Programming Hero News API](https://openapi.programming-hero.com/api/news/).
- **Config:** See `AGENTS.md` for Next.js-specific rules and breaking changes.

---

## License

This project is for educational/demo purposes. See LICENSE file if present.

# 👨‍💻 Author
**Md Anawar Hossain**
- **GitHub:** [@anawarhossain](https://github.com/anawarhossain)
- **Facebook:** [Anawar Hossain](https://web.facebook.com/AnawarHossain55)
- **LinkeIn:** [Anawar Hossain](https://www.linkedin.com/in/anawarhossain/)
- **X(Twitter):** [Anawar Hossain](https://x.com/MDANAWAR22)
- **WhatsApp:** [Anawar Hossain](https://wa.me/+8801701020694)
- **Role:** Junior Developer
