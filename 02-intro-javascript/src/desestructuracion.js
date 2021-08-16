// Desestructuracion de objetos

const persona = {
    nombre: 'Tony',
    edad: 45,
    // clave: 'Ironman'
}


const usarContext = ({
    nombre,
    edad,
    // rango = 'Capitan'
}) => {
    // console.log(nombre, edad, rango)

    return {
        nombreClave: nombre,
        anios: edad,
        latLng: {
            lat: 1,
            lon: 2
        }
    }

}

const {
    nombreClave,
    anios,
    latLng: {lat,lng}
} = usarContext(persona);



console.log(nombreClave, anios, lat)