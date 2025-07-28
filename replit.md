# AI Agent Build vs Buy Assessment Tool

## Overview

This is a full-stack web application that helps organizations make informed decisions about whether to build AI agents in-house or purchase existing solutions. The application features an interactive assessment tool with both quick decision paths and comprehensive evaluations, providing tailored recommendations based on user responses.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: React hooks with custom assessment state management
- **Data Fetching**: TanStack Query (React Query) for server state management
- **Animations**: Framer Motion for smooth transitions and interactions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Development**: Hot module replacement via Vite integration
- **API Structure**: RESTful endpoints with `/api` prefix
- **Error Handling**: Centralized error middleware with structured responses

### Component Architecture
- **UI Components**: Radix UI primitives with shadcn/ui styling
- **Assessment Flow**: Multi-step wizard with progress tracking
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Accessibility**: Full ARIA compliance through Radix UI components

## Key Components

### Assessment Engine
- **Quick Path**: 3-question rapid assessment for immediate decisions
- **Full Assessment**: Comprehensive multi-section evaluation
- **Progress Tracking**: Visual progress indicators and question navigation
- **Result Calculation**: Algorithm-based recommendation engine with confidence scoring

### Data Models
- **Users**: Basic user authentication with username/password
- **Assessment Responses**: Session-based response storage with metadata
- **Question Types**: Structured question format with multiple choice options
- **Results**: Recommendation types (BUILD/BUY/HYBRID/MIXED) with reasoning

### Storage Layer
- **Development**: In-memory storage implementation
- **Production Ready**: Drizzle ORM with PostgreSQL schema defined
- **Session Management**: Session-based data persistence
- **Data Validation**: Zod schemas for type-safe data handling

## Data Flow

1. **User Journey**: Welcome screen → Path selection → Question sequence → Results
2. **State Management**: Local React state for UI, custom hooks for assessment logic
3. **Data Persistence**: Responses stored per session with optional user association
4. **Result Generation**: Real-time calculation based on response patterns
5. **Navigation**: Auto-advance on selection with manual back navigation support

## External Dependencies

### Core Libraries
- **@neondatabase/serverless**: Database connectivity for PostgreSQL
- **drizzle-orm**: Type-safe database ORM with migration support
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight client-side routing
- **framer-motion**: Animation and transition library

### UI Framework
- **@radix-ui/react-***: Comprehensive accessible component primitives
- **tailwindcss**: Utility-first CSS framework
- **shadcn/ui**: Pre-built component library with consistent design system
- **lucide-react**: Modern icon library

### Development Tools
- **vite**: Fast build tool with HMR support
- **typescript**: Type safety across the entire stack
- **drizzle-kit**: Database migration and schema management

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: esbuild compiles TypeScript server to `dist/index.js`
- **Assets**: Static assets served from build directory

### Environment Configuration
- **Database**: PostgreSQL with connection via `DATABASE_URL`
- **Development**: Local development with Vite dev server proxy
- **Production**: Express serves static files and API endpoints

### Database Management
- **Schema**: Centralized in `shared/schema.ts` for type sharing
- **Migrations**: Drizzle Kit handles schema changes and deployments
- **Development**: Can run with in-memory storage for quick setup

### Hosting Requirements
- **Node.js**: Runtime environment for Express server
- **PostgreSQL**: Database for persistent storage
- **Static Serving**: Express handles both API and static file serving
- **Environment Variables**: Requires `DATABASE_URL` for production

The application is designed for easy deployment on platforms like Replit, with automatic database provisioning and simplified configuration management.