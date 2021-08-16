import { getImagen } from "../../base/11-async-await";

describe('Async await y fetch', () => {
    test('Devuelve url de la imagen ', async() => {
        
        const url = await getImagen();

        expect( url.includes('https://')).toBe(true)

    })
    
})
