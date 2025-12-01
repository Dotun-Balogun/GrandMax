# Grandmax Architecture

[![Next.js](https://img.shields.io/badge/Next.js-%23000000?logo=next.js&logoColor=white)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-%233178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) [![shadcn/ui](https://img.shields.io/badge/shadcn-ui-lightgrey)](https://ui.shadcn.com/) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

Grandmax Architecture is a responsive architecture portfolio and marketing site built with Next.js (TypeScript), Tailwind CSS, shadcn/ui, and React Hook Form. The project is PWA-enabled, follows accessibility best practices, and is optimized for SEO.

Live demo: https://grandmax.vercel.app

---

Table of Contents
- [Project Overview](#project-overview)
- [Demo & Screenshots](#demo--screenshots)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Environment Variables](#environment-variables)
- [Development](#development)
- [PWA Details](#pwa-details)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Authors & Contact](#authors--contact)

---

## Project Overview

Grandmax Architecture is a clean, responsive portfolio site aimed at showcasing architectural projects, case studies, and firm information. It emphasizes performance, accessibility, and a native-like experience via PWA capabilities. The site uses modern frontend tooling for a robust developer experience and maintainable codebase.

## Demo & Screenshots

Live: https://grandmax.vercel.app

Desktop:
![](./public/screenshot/desktop-1.png)

Mobile:
![](./public/screenshot/mobile-1.png)

## Features
- Responsive layouts and mobile-first design
- Progressive Web App: offline support, installable
- Accessible components and semantic markup
- SEO-friendly meta tags and sitemap support
- Contact form powered by React Hook Form with validation
- Component primitives and UI built with shadcn/ui + Tailwind CSS
- TypeScript for strong typing and DX

## Tech Stack
- Next.js (TypeScript)
- Tailwind CSS
- shadcn/ui
- React Hook Form
- next-pwa (or equivalent PWA tooling)
- Vercel (recommended for deployment)

## Quick Start

Clone the repo and run locally:

```bash
git clone https://github.com/Dotun-Balogun/GrandMax.git
cd GrandMax
# Install dependencies
npm install
# or pnpm install
# or yarn install

# Copy env example and edit values
cp .env.example .env.local

# Run the dev server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build
npm run start
```

Recommended package.json scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write ."
  }
}
```

## Environment Variables

Create a `.env.local` file in the project root. Example entries (adjust to your setup):

```env
NEXT_PUBLIC_SITE_URL=https://grandmax.vercel.app
NEXT_PUBLIC_CONTACT_EMAIL=you@domain.com
# Add keys for analytics, CMS, or third-party services as needed
```

Include a `.env.example` in the repo with placeholders for required variables.

## Development

Type checking:

```bash
npx tsc --noEmit
# or via build: npm run build
```

Linting & formatting:

```bash
npm run lint
npm run format
```
shadcn/ui:
- Use shadcn/ui component primitives and patterns. If you scaffold components, restart the Next.js dev server when adding new Tailwind classes so the JIT engine picks them up.

React Hook Form snippet:

```tsx
import { useForm } from 'react-hook-form';

type FormData = { name: string; email: string; message: string };

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = (data: FormData) => { /* submit */ };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name', { required: 'Name is required' })} />
      {errors.name && <span>{errors.name.message}</span>}
      {/* other fields */}
    </form>
  );
}
```

## PWA Details

This project ships with PWA support (service worker + manifest). Typical setup uses `next-pwa` or a custom Workbox configuration. Key files and locations:
- `next.config.js` — PWA plugin configuration (dest: 'public')
- `public/manifest.json` — app manifest and icons
- `public/icons/` or `public/screenshot/` — icons and splash images

Example `next.config.js` snippet:

```js
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({ reactStrictMode: true });
```

Manifest example (public/manifest.json):

```json
{
  "name": "Grandmax Architecture",
  "short_name": "Grandmax",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#111827",
  "icons": [
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

Troubleshooting:
- PWA install prompt often requires a production build and served over HTTPS. Test with `npm run build` + `npm run start` or deploy to Vercel.
- If service worker appears stale, clear site data in DevTools or bump cache names.

## Deployment

Vercel is the recommended host for Next.js apps. Steps:
1. Connect the GitHub repo to Vercel.
2. Set environment variables in the Vercel dashboard.
3. Build command: `npm run build`.

Notes: Ensure PWA assets live in `public/` so they are served correctly in production.

## Contributing

Contributions are welcome. Please follow these guidelines:
- Fork the repo and create feature branches: `git checkout -b feat/your-feature`
- Keep PRs small and focused.
- Run lint and type checks before opening PRs.
- Include screenshots or recordings for UI changes.

## License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.

## Authors & Contact

Dotun Balogun — https://github.com/Dotun-Balogun

