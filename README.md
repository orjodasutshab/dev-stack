# 🧱 Dev Stack Builder

A sleek, interactive web app where developers can browse a curated catalog of modern technologies and build their own personalized "tech stack" — one click at a time.

## 📖 About

Dev Stack Builder lets you explore frontend, backend, database, styling, DevOps, and tooling technologies, each shown with a rating, difficulty level, and badge. Pick the ones you want, watch them collect in your personal "Your Stack" panel, and remove or clear them whenever you like.

## 🛠️ Built With

- **React.js** + **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React-Toastify**
- **JSON** (local technology data)

## ✨ Features

1. **Build-your-own stack** — Add any technology to a personal "Your Stack" sidebar with one click; duplicates are blocked with a warning toast, and added cards are visually marked as "✓ Added to Stack."
2. **Fully responsive layout** — A sticky navbar that adapts from a hamburger-menu mobile layout to a full desktop nav, with a technology grid that reflows from 1 to 3 columns depending on screen size.
3. **Single-source gradient theme** — The brand's signature orange → pink → violet gradient is defined once and reused across the logo, hero heading, and primary buttons.

## 🧠 React Concepts Q&A

**What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-like markup directly inside JavaScript/TypeScript code. It makes describing the UI much more readable than calling `React.createElement()` by hand, while still compiling down to plain JavaScript.

**What is the difference between props and state?**
Props are data passed into a component from its parent — read-only from the child's side. State is data a component manages internally and can change over time, which triggers a re-render when it updates.

**What does the useState hook do, and where did you use it in this project?**
`useState` lets a component hold and update its own local data between renders. In this project it tracks the list of selected technologies (the "stack"), the loading state, and the mobile menu open/closed state.

**What does the useEffect hook do, and why did you need it to load the JSON data?**
`useEffect` runs side effects after a component renders — like data fetching. It was needed here to fetch the technology JSON once when the app first loads, and to toggle the loading state around that fetch.

**Why does every item in a `.map()` list need a unique key prop?**
React uses the `key` to identify which items changed, were added, or were removed between renders, so it can update the DOM efficiently instead of re-rendering the whole list.

**What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on a condition. For example, the "Your Stack" panel checks if the selected list is empty — if it is, it shows a friendly empty message; otherwise, it renders the list of stack items.

**How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child through props. For a child to send information back up, the parent passes down a callback function as a prop, and the child calls it — for example, `TechCard` calls `onAddToStack(technology)` when its button is clicked.

## 📤 Live Demo

- **GitHub Repository:** https://github.com/orjodasutshab/dev-stack
- **Live Site:** 