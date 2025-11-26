IranTech Dashboard
This is a Next.js dashboard application developed for IranTech Co, featuring comprehensive job information management, progress tracking, and Persian language support. The project demonstrates modern web development practices with TypeScript, responsive design, and RTL layout support.

🧠 Overview
The IranTech Dashboard is a feature-rich web application built with Next.js 15 and React 19, designed to manage job information and track progress with full Persian language support. The application showcases advanced UI components, form handling, and state management.

Key features include:

Job Information Management - Add, edit, and delete job entries with form validation

Progress Tracking - 9-step progress bar with RTL support and visual status indicators

Persian Language Support - Full RTL layout with Persian numbers and dates

Responsive Design - Mobile-first approach with Tailwind CSS

Modern Development - Built with the latest Next.js and React features

🚀 Getting Started
Run the development server:

bash
npm run dev

# or

yarn dev

# or

pnpm dev
Then open http://localhost:3000 in your browser to view the application.

🛠️ Technologies Used
Next.js 15 - React framework with App Router and Turbopack

React 19 - Latest React with new features and optimizations

TypeScript - Type-safe development

Tailwind CSS 4 - Utility-first CSS framework

Zustand - Lightweight state management

React Multi Date Picker - Persian calendar date picker

Icomoon - Custom icon font system

React Loading Skeleton - Loading state components

📁 Project Structure
text
src/
├── components/
│ ├── JobInformation.tsx # Job management with forms and CRUD operations
│ ├── ProgressBar.tsx # 9-step progress tracker with RTL support
│ ├── ContentInfoBox.tsx # Component wrapper
│ └── ...
├── hooks/
│ └── usePersianNumber.ts # Custom hook for Persian number conversion
├── pages/
│ ├── index.tsx # Main dashboard page
│ └── ...
├── store/
│ └── useAppStore.ts # Zustand global state management
├── styles/
│ ├── globals.css # Global styles and Tailwind imports
│ ├── colors.css # Custom color definitions
│ └── icons.css # Icomoon icon font styles
├── types/
│ └── types.ts # TypeScript type definitions
└── utils/
└── persianNumber.ts # Persian number conversion utilities
🌍 RTL & Persian Support
The application features comprehensive Persian language support:

RTL Layout - Full right-to-left text direction

Persian Numbers - Automatic conversion of numbers to Persian digits (۰,۱,۲,...)

Persian Calendar - Jalali calendar integration for date inputs

Persian Typography - Optimized for Persian/Arabic script rendering

Key Utilities:
toPersianNumber() - Convert numbers to Persian digits

toPersianDate() - Format dates in Persian format

RTL CSS classes and dir="rtl" attributes

🎨 UI Components
Job Information Manager
Form Management - Dynamic form with organization, position, start date, and responsibilities

CRUD Operations - Add, edit, and delete job entries

In-place Editing - Edit forms appear directly below job entries

Form Validation - Required field validation and error handling

Animations - Smooth expand/collapse transitions

Progress Tracker
9-Step Progress - Diamond start/end with circular intermediate steps

Status Indicators - Completed (blue), active (green), pending (gray)

Connector Lines - Solid lines for completed steps, dashed for pending

RTL Direction - Progress flows from right to left

Responsive Design - Adapts to different screen sizes

💾 Data Management
Local State - React useState for component-level data

Global State - Zustand for application-wide state management

Form State - Controlled components with real-time validation

📱 Responsive Design
Built with mobile-first approach using Tailwind CSS:

Grid Layouts - Responsive grid systems for complex layouts

Flexible Components - Adapt to different screen sizes

Touch-Friendly - Optimized for mobile interactions

Cross-browser - Consistent experience across browsers

🔧 Development Features
TypeScript - Full type safety and better developer experience

Hot Reload - Fast development with Turbopack

ESLint - Code quality and consistency

Component Reusability - Modular and reusable components

Custom Hooks - Shared logic and state management

🚀 Deployment
Create a production build:

bash
npm run build
npm start
Deploy to any platform that supports Next.js:

Vercel (Recommended) - Optimal for Next.js applications

Netlify - Simple static deployment

Docker - Containerized deployment

📚 Learn More
Next.js Documentation

Tailwind CSS Documentation

React 19 Features

Zustand State Management

Persian Calendar

🎯 Technical Highlights
Next.js 15 with Turbopack - Faster builds and development

React 19 - Latest features and performance improvements

Tailwind CSS 4 - Modern CSS with JIT compilation

TypeScript - Enterprise-grade type safety

RTL First - Built with Persian/Arabic users in mind

Developed for IranTech Co with ❤️ using modern web technologies.
