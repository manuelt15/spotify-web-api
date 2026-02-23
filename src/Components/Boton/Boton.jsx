import './Boton.css'

export const Boton = ({name})=> {

    return(
       <button className='spotify btn'>
        <div>{name}</div>
      </button> 
    )
}