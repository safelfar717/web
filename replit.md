# TradeX - Trading Education Platform

## Overview

TradeX is a premium fintech web application designed for the Indonesian market, combining trading education, verified signals, copy trading, and e-commerce in a single integrated platform. The application features a modern, luxury-focused design with a black and gold color scheme, inspired by high-end financial institutions and fintech leaders like Stripe and Revolut.

This is a full-stack TypeScript application built as a marketing/investor pitch website showcasing TradeX's business model, financial projections, and value proposition to potential investors and users.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight React router. The application has five main routes:
- Home (`/`) - Hero section with problem/solution presentation
- About (`/about`) - Mission, vision, values, and team information
- Business Model (`/business-model`) - Business Model Canvas visualization
- Financials (`/financials`) - Revenue streams and financial projections
- Contact (`/contact`) - Contact form for investor inquiries

**UI Framework**: shadcn/ui component library built on Radix UI primitives, providing accessible, customizable components with Tailwind CSS styling. The design system follows a "new-york" style variant with custom gold/black theming.

**Animation**: GSAP (GreenSock Animation Platform) with ScrollTrigger plugin for sophisticated scroll-based animations and transitions throughout the marketing pages.

**State Management**: TanStack Query (React Query) for server state management, data fetching, and caching. No global client state management library is used as the application is primarily presentational.

**Styling Approach**: Tailwind CSS with extensive customization for the premium fintech aesthetic. Custom CSS variables define the black/gold color palette, and utility classes provide hover effects, gradients, and glow animations.

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**Development Mode**: Vite middleware integration for hot module replacement during development, serving the React application through the Express server.

**Production Mode**: Static file serving from the built client assets in the `dist/public` directory.

**API Design**: RESTful API with routes prefixed by `/api`. Currently implements challenge media endpoints for uploading and retrieving hero section images (admin feature for customizing the problem section visual).

**Session Management**: Although connect-pg-simple is included (for PostgreSQL session storage), no authentication is currently implemented as this is a marketing website.

### Data Storage Solutions

**Database**: PostgreSQL via Neon Database serverless driver (`@neondatabase/serverless`).

**ORM**: Drizzle ORM for type-safe database queries and schema management.

**Schema Design**: Two main tables defined:
- `users` - Basic user table with id, username, and password (not currently used in the application)
- `challenge_media` - Stores customizable hero/problem section content (headline, description, base64 image)

**In-Memory Fallback**: MemStorage class implements the storage interface for development/testing without a database connection. Uses JavaScript Maps to store data in memory.

**Migration Strategy**: Drizzle Kit handles schema migrations with the `db:push` script for synchronizing schema changes to the database.

### External Dependencies

**UI Component Libraries**:
- Radix UI - Comprehensive set of accessible, unstyled component primitives (accordion, dialog, dropdown, tooltip, etc.)
- shadcn/ui - Pre-built component implementations using Radix UI and Tailwind CSS
- Lucide React - Icon library for consistent iconography

**Animation & Interaction**:
- GSAP (@gsap/react) - Professional-grade animation library
- ScrollTrigger - GSAP plugin for scroll-based animations

**Form Handling**:
- React Hook Form - Form state management
- Zod - Schema validation
- @hookform/resolvers - Integration between React Hook Form and Zod

**Database & ORM**:
- @neondatabase/serverless - Serverless PostgreSQL driver for Neon Database
- Drizzle ORM - TypeScript ORM
- drizzle-zod - Integration for generating Zod schemas from Drizzle schemas

**Utility Libraries**:
- date-fns - Date manipulation and formatting
- clsx & tailwind-merge - Conditional CSS class management
- class-variance-authority - Type-safe variant management for components

**Development Tools**:
- @replit/vite-plugin-runtime-error-modal - Development error overlay
- @replit/vite-plugin-cartographer - Replit integration
- tsx - TypeScript execution for Node.js

### Design System & Theming

**Color Philosophy**: Dark mode only with a premium black (#000000) background and metallic gold gradient (#D4AF37 → #F7E27A) as the primary accent. The design intentionally avoids light mode to maintain the luxury fintech aesthetic.

**Typography**: Inter font family from Google Fonts, with weights ranging from 300 to 900 for versatile text hierarchy.

**Component Patterns**:
- Cards with subtle gold borders (20% opacity) and hover glow effects
- Gradient text treatments for headings
- Glass-morphism effects with backdrop blur
- 3D transform tilts on hover for interactive elements

**Responsive Design**: Mobile-first approach with breakpoints defined in Tailwind config. Components adapt from single-column mobile layouts to multi-column desktop grids.

**Custom Animations**:
- `gold-glow-hover` - Box shadow animation on hover
- `hover-elevate` - Subtle lift effect with shadow increase
- GSAP timeline animations for sequential reveals
- Scroll-triggered counter animations for statistics