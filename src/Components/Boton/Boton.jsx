import './Boton.css'

export const Boton = ({name})=> {

    return(
       <button className='spotify' style={{ width: 'fit-content', height: '100%', paddingLeft: 10, paddingRight: 10, paddingTop: 10, paddingBottom: 10, background: '#1ED760', borderRadius: 21, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
        <div style={{ textAlign: 'center', color: 'black', fontSize: 9, fontFamily: 'Avenir Next', fontWeight: '700', wordWrap: 'break-word' }}>{name}</div>
      </button> 
    )
}