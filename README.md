# Kicks

A modern e-commerce application built with Next.js, TypeScript, and Tailwind CSS.

## Prerequisites

- Node.js 20+ or higher
- pnpm (recommended) or npm

## Installation

1. Clone the repository:
```bash
git clone https://github.com/thisismasud/kicks_zavisoft.git
cd kicks
```

2. Install dependencies:
```bash
pnpm install
```

3. Configure environment variables:
Create a `.env` file in the root directory and add:
```env
API_URL="https://api.escuelajs.co/api/v1"
```

## Available Scripts

### Development
```bash
pnpm dev
```
Starts the development server at `http://localhost:3000`

### Build
```bash
pnpm build
```
Creates an optimized production build

### Production
```bash
pnpm start
```
Runs the production server

### Linting
```bash
pnpm lint
```
Runs ESLint to check code quality

## Folder Structure

```
kicks/
├── app/
│   ├── error.tsx              # Error boundary component
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   ├── not-found.tsx          # 404 page
│   └── page.tsx               # Home page
│
├── components/
│   ├── common/
│   │   ├── Footer/            
│   │   └── Header/
│   │       ├── Cart.tsx      
│   │       ├── HamburgerMenu.tsx
│   │       ├── Header.tsx
│   │       ├── Logo.tsx
│   │       ├── Navbar.tsx
│   │       ├── Profile.tsx
│   │       └── Search.tsx
│   ├── Home/
│   │   ├── Hero/
│   │   │   ├── Banner.tsx
│   │   │   ├── BannerThumbnail.tsx
│   │   │   ├── Hero.tsx
│   │   │   └── Label.tsx
│   │   └── NewDrops/
│   │       └── NewDrops.tsx
│   └── Products/
│       ├── ProductCard.tsx
│       └── Tag.tsx
│
├── lib/
│   ├── config/
│   │   └── site-config.ts     # Site configuration
│   └── data/
│       └── products.ts        # Product data
│
├── public/
│   └── products/              # Product images and assets
│
├── .env                       # Environment variables
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig.json
└── README.md
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `API_URL` | Base URL for API requests | `https://api.escuelajs.co/api/v1` |

## Technologies

- **Framework**: Next.js 16+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm
- **Linting**: ESLint

## License

MIT
