import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    // Crea una constante que se asigna a la propiedad ref de un componente del html
    const inputRef = useRef();

    // console.log(ref)

    const handleClick = () => {
        // Se puede acceder al input
        inputRef.current.select();
    }
    

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr/>

            <input 
            //  Asigna este input a inputRef
                ref={ inputRef }
                className="form-control" 
                placeholder="Su nombre"
            >
            
            </input>

            <button 
                onClick={ handleClick }
                className="btn btn-outline-primary mt-5"
            >
                Focus
            </button>
        </div>
    )
}
