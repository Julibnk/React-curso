import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones.js' , () => {
    test('getUser debe devolver un objeto', () => {
        

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest)
        // console.log(user)

    })

    test('getUsuarioActivo debe devolver un objeto', () => {
        

        const usuarioActivo = {
            uid: 'ABC567',
            username: 'Pepe'
        }

        const user = getUsuarioActivo('Pepe');

        expect(user).toEqual(usuarioActivo)
        // console.log(user)

    })
    
})