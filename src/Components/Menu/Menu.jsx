import { Boton } from '../Boton/Boton'
import './Menu.css'

export const Menu = ()=>{

    return(
        <div className="menu">
            <div className="menu-movil">menu</div>
            <img src="/spotify.png" alt="" className="logo" />

            <div className="wrapper-opciones">

                

                <div className="wrapper-explorar">

                    <div className="explorar">Explore some music</div>
                    
                    <ul className="ul-wrapper-opciones2">
                        <li className="opciones-li">
                            <img src="/Vector.png" alt="like" className="li-img" />
                            <span className="li-span">Search Artists</span>
                        </li>
                        <li className="opciones-li">
                            <img src="/library.png" alt="like" className="li-img" />
                            <span className="li-span">Spotify's library</span>
                        </li>   
                        <li className="opciones-li">
                            <img src="/like.png" alt="like" className="li-img" />
                            <span className="li-span">World Favorites</span>
                        </li>                     
                    </ul>
                </div>               
            </div>
        </div>
    )
}