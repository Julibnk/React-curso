import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { procesoPesado} from '../helpers/procesoPesado'

import '../02-useEffect/effects.css';

export const MemoHook = () => {

    const {counter, increment} = useCounter(100);
    const [show, setShow] = useState(true);

    // El hook useMemo solo ejecuta la funcion procesoPesado(counter) , cuando [counter] cambia. El return de useMemo es el return de la funcion procesoPesado
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ counter } </small></h3>
            <hr/>

            <p> { memoProcesoPesado }</p>

            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
                +1
            </button>

            <button className="btn btn-outline-primary ml-3"
            onClick={ () => {setShow(!show) } }>
                Show/Hide {JSON.stringify( show )}
            </button>


        </div>
    )
}
