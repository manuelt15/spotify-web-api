# Spotify Artist Search

A React 19 SPA that allows you to search for Spotify artists and display them with their image, genres, and follower count.

**Live URL**: https://spotify-web-api-eight.vercel.app/

---

## Technologies

- React 19
- Vite
- Fetch API
- SweetAlert2
- Spotify Web API (Client Credentials Flow)

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env` file in the root directory:

```
VITE_CLIENT_ID=your_spotify_client_id
VITE_CLIENT_SECRET=your_spotify_client_secret
```

### 3. Run Development Server

```bash
npm run dev
```

The app will be available at http://localhost:5173

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## Features

- Search Spotify artists by name
- Display artist image, name, primary genre, and follower count
- Link to artist's Spotify profile
- Responsive design for all screen sizes
- Error handling with SweetAlert2 notifications

---

## API Endpoints

| Action | Endpoint |
|--------|----------|
| Get access token | `POST https://accounts.spotify.com/api/token` |
| Search artists | `GET https://api.spotify.com/v1/search?type=artist&q=` |

---

## Project Structure

```
src/
├── Components/
│   ├── Boton/
│   │   ├── Boton.jsx
│   │   └── Boton.css
│   ├── Discover/
│   │   ├── Discover.jsx
│   │   └── Discover.css
│   ├── Main/
│   │   └── Main.jsx
│   └── Menu/
│       └── Menu.jsx
├── App.jsx
├── App.css
└── main.jsx
```

---

## Notes

- This project uses the Spotify Client Credentials Flow (no user authentication required)
- To search for tracks instead of artists, change `type=artist` to `type=track` in the API call
- The project includes comprehensive responsive breakpoints for all common device widths
