import { getSaludo } from "../../base/02-template-string";

describe('Tests template-string.js',  () => {

    test('getSaludo debe de devolver hola Julian ', () => {
        
        const nombre = 'Julian';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);

    })

    test('getSaludo debe devolver Hola Carlos si no hay parametro', () => {
        

        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos')


    })
    
    

})