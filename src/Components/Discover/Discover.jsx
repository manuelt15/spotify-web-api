import { useState, useEffect } from 'react'
import { Boton } from '../Boton/Boton'
import Swal from 'sweetalert2'
import './Discover.css'


const { VITE_CLIENT_ID, VITE_CLIENT_SECRET } = import.meta.env

export const Discover = () => {
    const [cancion, setCancion] = useState('')
    const [canciones, setCanciones] = useState([])
    const [token, setToken] = useState('')

    useEffect(() => {
        
    const fetchToken = async () => {
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `grant_type=client_credentials&client_id=${VITE_CLIENT_ID}&client_secret=${VITE_CLIENT_SECRET}`,
            }

            const response = await fetch('https://accounts.spotify.com/api/token', options)
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json()
            setToken(data.access_token)
        } catch (error) {
            console.error('Error fetching token:', error)
        }
    }

    fetchToken()
}, [])


    const handleSearch = (e) => {
        e.preventDefault()
        if (cancion.trim() === '') {
            // alert(`Debes rellenar los campos`)
            Swal.fire({
                title: "🤕",
                text: "Debes rellenar el campo de busqueda",
                icon: "error",
                confirmButtonColor: "#1ED760"
            });
            return
        }
        // console.log(cancion)
        setCancion('')
        getCanciones(cancion)
    }

    const info = {
        method: `get`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }

    const getCanciones = async (cancion) => {
        try {
            let url = `https://api.spotify.com/v1/search?q=${cancion}&type=artist`
            let data = await fetch(url, info)
            let res = await data.json()
            // console.log(res.artists)
            setCanciones(res.artists.items)

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="discover-wrapper">

            <div className="search-wrapper">
                <span className="discover">Discover</span>
                <form className='form' onSubmit={handleSearch}>
                    <img src="/search-b.svg" alt="lupa" className="lupa" />
                    <input type="text" value={cancion} placeholder='search' className='search' onChange={e => setCancion(e.target.value)} />
                    <input type="submit" className='submit' />
                </form>
            </div>

            <div className="wrapper-tops">
                <h2 className="charts-h2">{canciones.length === 0 ? <div>Spotify Artists</div> : <div>{`Welcome Artists`}</div>}</h2>
                <div className="wrapper-charts">
                    {canciones.length === 0 ? <div style={{
                        color: `white`,
                        fontSize: `.8rem`,
                        width: `100%`
                    }}>Please make a search to start listening</div> : canciones.map((cancion, index) =>
                        <img src={cancion?.images[0]?.url} alt="" className="charts" key={index} />
                    )}
                </div>
            </div>

             <div className="grid">
                {canciones.map((cancion, index) =>
                    <div className="card" key={index}>
                        <div className="img-btn">
                            <img src={cancion?.images[0]?.url} alt="portada" className="card-img" />
                            <a href={cancion?.external_urls.spotify} target='_blank' rel='noreferrer'>
                                <Boton name={`Play on Spotify`}/>
                            </a>
                        </div>

                         <div className="card-info" key={index}>
                            <h2 className="titulo-h2">{cancion?.name}</h2>
                            <div className="card-duracion">
                                <div >
                                    <div className="artista">Artist</div>
                                    <span className="cantante">{cancion?.genres[0]}</span>
                                </div>
                                 <div className='info'>
                                    <div className='duracion'>Followers</div>
                                    <span className="duracion">{cancion?.followers.total}</span>
                                </div> 
                            </div> 
                        </div> 
                    </div>
                )}
            </div> 

        </div>
    )
}