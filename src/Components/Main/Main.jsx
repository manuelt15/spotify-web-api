import { Discover } from '../Discover/Discover'
import { Menu } from '../Menu/Menu'
import './Main.css'

export const Main = ()=>{

    return(
        <main className="main">
            <Menu/>
            <Discover/>
        </main>
    )
}