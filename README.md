# Tyrone - Business Tool Recommendation Dashboard

A modern, responsive dashboard app to help users discover and manage business tools. Built with **React 18**, **Vite**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features
- **Authentication**: Sign Up, Sign In, and Onboarding flows
- **Dashboard**: Clean layout with Sidebar and Topbar components
- **Tool Stack**: View and manage your current tools
- **Recommended Tools**: Discover new tools with a beautiful card UI
- **Responsive Design**: Works great on all devices
- **Modern UI**: Built with Tailwind CSS and custom components

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit [http://localhost:5173/](http://localhost:5173/) in your browser.

### Production Build
```bash
npm run build
```

## 🗂️ Project Structure
```
project/
  src/
    components/
      Sidebar/      # Sidebar navigation component
      Topbar/       # Topbar (search, actions)
      ui/           # UI primitives (button, card, etc.)
    screens/
      Dashboard/    # Dashboard main screen
      Onboarding/   # Onboarding steps
      SignIn/       # Sign In screen
      SignUp/       # Sign Up screen
    index.tsx       # App entry point
  tailwind.config.js
  vite.config.ts
  package.json
```

## 🖌️ UI & Styling
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for reusable UI components
- **Lucide** for icons

---

Made with ❤️ using React, Vite, and Tailwind CSS.

