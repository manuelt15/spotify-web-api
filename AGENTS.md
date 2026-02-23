# AGENTS.md - Developer Guidelines

This document provides guidance for AI agents working in this repository.

## Project Overview

- **Project Type**: React 19 SPA with Vite
- **Language**: JavaScript/JSX (ES Modules)
- **Package Manager**: npm

## Build / Lint / Test Commands

```bash
# Development
npm run dev          # Start Vite dev server (http://localhost:5173)

# Build
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally

# Linting
npm run lint         # Run ESLint on all .js/.jsx files
```

**Note**: This project does not have a test framework configured. Do not write tests unless explicitly requested.

## Code Style Guidelines

### General Rules

- Use ES Modules with `import`/`export` syntax
- Use JavaScript (not TypeScript)
- Target ES2020+ (configured in eslint.config.js)
- Use functional components with hooks (React 19)

### File Organization

```
src/
├── Components/
│   └── ComponentName/
│       ├── ComponentName.jsx   # Main component
│       └── ComponentName.css    # Co-located styles
├── App.jsx
├── App.css
└── main.jsx
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `Discover.jsx`, `Menu.jsx` |
| Component folders | PascalCase | `Discover/`, `Boton/` |
| CSS classes | kebab-case | `.search-wrapper`, `.card-info` |
| Variables | camelCase | `setCancion`, `handleSearch` |
| React hooks | camelCase with `use` prefix | `useState`, `useEffect` |

### Imports

```jsx
import { useState, useEffect } from 'react'
import { Discover } from './Components/Discover/Discover'
import App from './App'
import './Discover.css'
import Swal from 'sweetalert2'
```

### Component Patterns

**Named exports:**
```jsx
export const Discover = () => {
  const [state, setState] = useState('')

  useEffect(() => {
    // side effects
  }, [])

  return ( <div>...</div> )
}
```

**Default export:**
```jsx
function App() {
  return ( <><Main/></> )
}

export default App
```

### Error Handling

```jsx
const fetchData = async () => {
  try {
    const response = await fetch('/api/endpoint')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    setState(data)
  } catch (error) {
    console.error('Error message:', error)
    Swal.fire({ ... })
  }
}
```

### JSX Guidelines

- Use self-closing tags: `<Input />`
- Always include `key` prop when mapping arrays
- Use optional chaining: `cancion?.images[0]?.url`
- External links must include `rel='noreferrer'`

### ESLint Rules

The project uses @eslint/js, eslint-plugin-react-hooks, and eslint-plugin-react-refresh.
- `no-unused-vars`: Error on unused variables except those starting with uppercase or underscore

### CSS Guidelines

- Co-locate CSS files with components
- Use kebab-case for class names
- Avoid inline styles except for dynamic values

### UI Libraries

- **SweetAlert2** (`Swal`): Use for user dialogs/alerts

### Common Patterns

**Form handling:**
```jsx
const handleSearch = (e) => {
  e.preventDefault()
  if (input.trim() === '') {
    Swal.fire({ title: "Error", text: "Message", icon: "error" })
    return
  }
  setInput('')
  fetchData(input)
}
```

**API calls with token:**
```jsx
const info = {
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  }
}
```

## What NOT To Do

- Do not add TypeScript unless explicitly requested
- Do not add testing frameworks (Jest, Vitest, etc.) without approval
- Do not add new build tools (Webpack, Rollup) - use Vite
- Do not change the folder structure
- Do not add global state management (Redux, Zustand) without approval
- Do not commit secrets or API keys
