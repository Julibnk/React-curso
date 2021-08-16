const personajes = ['Pepe', 'Pablin', 'Pablich', 'Mario'];

const [ , , pablin ] = personajes;

console.log(pablin);

const returnArray = () => {
    return ['ABC', 123]
}

const [letras, numeros] = returnArray();
// console.log(letras, numeros)

const usarState = ( valor ) => {
    return [ valor , () => { console.log('Hola mundo') } ]
}

const [nombre, setNombre] = usarState('Pepe');

setNombre()
console.log(nombre)