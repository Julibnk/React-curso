import React, { useState, useCallback, useEffect } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // Al renderizarse se genera una nueva funcion . Como esta funcion se pasa al componente hijo, se lanza la renderizacion aunque el componente hijo tenga React.memo 
    // porque al generarse una nueva instancia de la funcion la prop increment cambia 
    // const increment = () => {
    //     setCounter(counter + 1)
    // }

    // useCallback genera y devuelve una funcion "memorizada". 
    // Esta funcion solo cambia si cambia la depedencia/s que se pasa por []
    const increment = useCallback(
        (num) => {
            // Recupera el state actual (variable counter) y le pasa al useState counter + 1
            setCounter(c => c + num);
        },
        [setCounter],
    )


    // Cuando se usa useEfectt escuchando los cambios de una funcion, hay que usar useCallback para evitar que se dispare cada vez
    useEffect (() => {

    }, [increment])    

    return (
        <div>
            <h1>useCallback Hook {counter}</h1>
            <hr/>
            <ShowIncrement increment={increment}/>
        </div>
    )
}
