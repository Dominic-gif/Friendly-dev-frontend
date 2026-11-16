# Friendly Dev Frontend Website

This is the frontend for **Friendly Dev**, a developer portfolio website with projects and blog posts. It is built with React Router (framework mode) and Tailwind CSS, and it gets its content from a [Strapi backend](https://github.com/Dominic-gif/Friendly-dev-backend). Images are hosted on Cloudinary.

## Features

- Home page with featured projects and the latest blog posts
- Projects page with category filtering, pagination and animated cards (Framer Motion)
- Project detail pages
- Blog with search, pagination and Markdown-rendered posts
- About page
- Contact form powered by Formspree
- Custom 404 page
- Server-side rendering with React Router loaders

## Tech Stack

- [React 19](https://react.dev/)
- [React Router 8](https://reactrouter.com/) (framework mode, SSR)
- [Tailwind CSS 4](https://tailwindcss.com/) and the Typography plugin
- [Strapi 5](https://strapi.io/) headless CMS (separate backend repo)
- [Cloudinary](https://cloudinary.com/) for image hosting
- [Framer Motion](https://motion.dev/), [React Icons](https://react-icons.github.io/react-icons/) and [React Markdown](https://github.com/remarkjs/react-markdown)
- TypeScript

## Pages

| Route          | Page                     |
| -------------- | ------------------------ |
| `/`            | Home                     |
| `/projects`    | All projects             |
| `/projects/:id`| Project details          |
| `/blog`        | All blog posts           |
| `/blog/:slug`  | Blog post                |
| `/about`       | About                    |
| `/contact`     | Contact form             |
| `*`            | Not found                |

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set the environment variables

Create a `.env` file in the project root that points to your Strapi backend:

```env
VITE_API_URL='https://your-strapi-backend.com/api'
VITE_STRAPI_URL='https://your-strapi-backend.com'
```

For local development with Strapi running on your computer, use `http://localhost:1337/api` and `http://localhost:1337`.

> Anything that starts with `VITE_` ends up in the browser code, so never put secrets in this file.

### 3. Start the dev server

```bash
npm run dev
```

The app runs at `http://localhost:5173`.

## Scripts

| Command               | What it does                                             |
| --------------------- | -------------------------------------------------------- |
| `npm run dev`         | Starts the dev server with hot reloading                 |
| `npm run build`       | Builds the app for production into `build/`              |
| `npm start`           | Serves the production build                              |
| `npm run typecheck`   | Generates route types and runs the TypeScript checker    |
| `npm run json-server` | Serves the old local mock data in `data/db.json` on port 8000 |

## Project Structure

```
app/
├── components/   Reusable UI (Navbar, Hero, ProjectCard, PostCard, Pagination…)
├── posts/        Original Markdown posts (before moving content to Strapi)
├── routes/       Pages and layouts
├── root.tsx      App shell and error boundary
├── routes.ts     Route config
└── types.ts      Project, Post and Strapi response types
data/db.json      Mock data used with json-server
public/           Static images and posts-meta.json
```

## Deployment

The frontend is deployed to [Vercel](https://vercel.com/). Import the GitHub repo, keep the default build settings, and make sure `VITE_API_URL` and `VITE_STRAPI_URL` point to the live Strapi backend on Render.

A `Dockerfile` is also included, so the app can run on any platform that supports Docker:

```bash
docker build -t friendly-dev-frontend .
docker run -p 3000:3000 friendly-dev-frontend
```

## Related

- Backend: [Friendly-dev-backend](https://github.com/Dominic-gif/Friendly-dev-backend)
