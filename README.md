🎧 Discover Component (React + Spotify API)
---
https://spotify-web-api-eight.vercel.app/
---

Este componente permite buscar artistas de Spotify y mostrarlos con su imagen, géneros y número de seguidores.
Al hacer click en Play on Spotify se abre la página del artista en Spotify.

⚙️ Tecnologías usadas

React

Vite

Fetch API

SweetAlert2

Spotify Web API (Client Credentials Flow)

📌 Variables de entorno

Crea un archivo .env en la raíz del proyecto y coloca:
VITE_CLIENT_ID=tu_client_id_de_spotify
VITE_CLIENT_SECRET=tu_client_secret_de_spotify

🚀 ¿Qué hace el componente?

Obtiene un token de acceso de Spotify al montar el componente (useEffect)

Permite buscar artistas por nombre

Hace una petición a la API de Spotify para traer artistas

Renderiza una grid con:

Imagen del artista

Nombre

Género principal

Followers

Botón que enlaza a Spotify

📁 Endpoints usados

| Acción          | Endpoint                                               |
| --------------- | ------------------------------------------------------ |
| obtener token   | `POST https://accounts.spotify.com/api/token`          |
| buscar artistas | `GET https://api.spotify.com/v1/search?type=artist&q=` |

🧠 Mejoras posibles

Guardar búsquedas recientes en localStorage

Autocompletado mientras se escribe

Paginación infinita (infinite scroll)

Añadir búsqueda por canciones o álbumes

Notas

Este componente actualmente solo busca artistas.
Si quieres buscar canciones en lugar de artistas, cambia type=artist por type=track en la URL del fetch.
