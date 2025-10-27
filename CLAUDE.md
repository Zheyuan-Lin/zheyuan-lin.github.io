# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a personal portfolio website for Zheyuan Lin built with Next.js 15, React 19, TypeScript, and Tailwind CSS. It's deployed to GitHub Pages and features a modern design with dark/light theme support using shadcn/ui components.

## Development Commands
- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build the application for production (outputs to `./out` directory for static export)
- `npm run start` - Start production server (after build)
- `npm run lint` - Run ESLint to check for code issues

## Project Architecture

### Directory Structure
- `/app` - Next.js App Router pages and layouts
  - `/about`, `/contact`, `/experience`, `/projects` - Individual page routes
  - `layout.tsx` - Root layout with theme provider, header, and footer
  - `page.tsx` - Homepage with hero section and service cards
- `/components` - Reusable React components
  - `/ui` - shadcn/ui component library (Radix UI + Tailwind CSS)
  - Custom components: Header, Footer, theme toggle, typewriter effects
- `/lib` - Utility functions (mainly `utils.ts` for cn() class merging)
- `/hooks` - Custom React hooks for mobile detection and toast notifications
- `/public` - Static assets including images and placeholder files

### Key Technologies
- **Next.js 15** with App Router and React Server Components
- **React 19** with client components for animations
- **TypeScript** with strict configuration
- **Tailwind CSS** for styling with CSS variables for theming
- **shadcn/ui** component system based on Radix UI primitives
- **Framer Motion** for animations and micro-interactions
- **next-themes** for dark/light mode theming
- **Lucide React** for consistent iconography

### Styling System
- Uses Tailwind CSS with custom CSS variables defined in `app/globals.css`
- Theme switching via `next-themes` with system preference detection
- Component styling follows shadcn/ui patterns with `class-variance-authority`
- Path aliases configured: `@/*` points to project root

### Component Patterns
- UI components in `/components/ui` follow shadcn/ui conventions
- Custom components use TypeScript with proper prop interfaces
- Client components marked with "use client" directive for interactivity
- Framer Motion used for page transitions and hover animations

### Deployment
- Automatic deployment to GitHub Pages via GitHub Actions workflow
- Static export build process (`next build` outputs to `./out`)
- Node.js 18.20.7 required for build environment
- Uses `--legacy-peer-deps` flag for npm installation due to peer dependency conflicts

## Adding New Pages
1. Create new page file in `/app/[route]/page.tsx`
2. Update navigation in `components/Header.tsx` if needed
3. Follow existing patterns for layout and styling

## Adding New Components
1. Use shadcn/ui CLI for new UI components: `npx shadcn@latest add [component]`
2. Place custom components in `/components` directory
3. Follow TypeScript patterns and export conventions
4. Use Tailwind classes and CSS variables for consistent theming