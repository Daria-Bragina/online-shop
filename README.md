# 🛍️ Online Shop

A responsive e-commerce application built with React 18 and Vite. Browse a product catalog, filter items by category or search query, and view detailed product pages — all powered by a local REST API via json-server.

**[Live Demo →](https://daria-bragina.github.io/online-shop/)**

---

## Screenshots

<img width="1699" height="1175" alt="2026 07 03 15-26-19" src="https://github.com/user-attachments/assets/2b402864-2ef6-4e4c-8363-b55f1b40f17f" />


---

## Features

- 📦 **Product catalog** — grid layout with product cards
- 🔍 **Search & filter** — filter by name or category in real time
- 📄 **Product detail page** — dedicated route for each item
- 🗃️ **Mock REST API** — json-server serves product data locally
- 📱 **Responsive design** — mobile-first layout with Tailwind CSS

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI | React 18 |
| Routing | React Router v7 |
| Styling | Tailwind CSS v4 |
| Build tool | Vite |
| Mock API | json-server |
| Deployment | GitHub Pages |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/Daria-Bragina/online-shop.git
cd online-shop
npm install
```

### Running locally

The app requires the mock API to be running alongside the dev server.

**Terminal 1 — start the API:**
```bash
npm run start:api
```
The API will be available at `http://localhost:9000`.

**Terminal 2 — start the app:**
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

---

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/            # Route-level page components
├── hooks/            # Custom React hooks
├── assets/           # Images and static files
└── App.jsx           # Root component with routing
data/
└── data.json         # Mock product database (json-server)
```

> _Update this tree to match your actual folder structure_

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run start:api` | Start json-server on port 9000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## Deployment

The project is deployed to GitHub Pages via the `gh-pages` package.

```bash
npm run build && npm run deploy
```

---

## Author

**Daria Bragina** — Frontend Developer  
[GitHub](https://github.com/Daria-Bragina)
