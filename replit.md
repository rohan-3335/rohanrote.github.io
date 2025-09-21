# Overview

A modern, professional portfolio website for Rohan Rote built as a full-stack application. The frontend is a React-based single-page application showcasing personal information, education, skills, and contact details with an interactive, responsive design. The backend provides an Express.js API foundation with PostgreSQL database support using Drizzle ORM, though currently focused on the portfolio presentation layer.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
- **State Management**: TanStack React Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Structure**: Modular design with reusable UI components following React best practices

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Database ORM**: Drizzle ORM for type-safe database operations
- **API Design**: RESTful API structure with /api prefix routing
- **Development**: Hot reloading with tsx for TypeScript execution
- **Build Process**: esbuild for fast backend compilation

## Data Storage
- **Primary Database**: PostgreSQL configured through Drizzle ORM
- **Connection**: Neon Database serverless PostgreSQL via connection string
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Fallback Storage**: In-memory storage implementation for development/testing

## Authentication & Session Management
- **Session Store**: PostgreSQL-backed sessions using connect-pg-simple
- **Session Security**: Configured for production with secure session handling
- **User Management**: Basic user schema with username/password authentication foundation

## Development & Deployment
- **Development Server**: Vite dev server with Express.js backend integration
- **Hot Module Replacement**: Full-stack development with live reloading
- **Static Assets**: Vite handles frontend asset bundling and optimization
- **Production Build**: Separate client and server build processes for deployment flexibility

# External Dependencies

## UI & Styling
- **shadcn/ui**: Comprehensive React component library built on Radix UI primitives
- **Radix UI**: Accessible, unstyled UI components for dialogs, forms, navigation
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Modern icon library for consistent iconography

## Database & Backend
- **Neon Database**: Serverless PostgreSQL database service
- **Drizzle ORM**: Type-safe ORM with PostgreSQL dialect support
- **Express.js**: Web application framework for Node.js
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## Development Tools
- **Vite**: Frontend build tool and development server
- **TypeScript**: Static type checking for both frontend and backend
- **esbuild**: Fast JavaScript bundler for backend compilation
- **Replit Integration**: Development environment plugins for Replit platform

## Form & Data Management
- **React Hook Form**: Performance-focused form library with validation
- **Zod**: TypeScript-first schema validation library
- **TanStack React Query**: Data fetching and caching library for React
- **date-fns**: Comprehensive date utility library