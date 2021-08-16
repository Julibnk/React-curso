import React from 'react'

//Memo hace que no se vuelva a renderizar el componente si no le actualizan las props
export const Small = React.memo(( {value} ) => {
    console.log('Llamada small')
    return (
        <small>{value}</small>
    )
})
