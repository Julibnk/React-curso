import {getHeroeById, getHeroesByOwner} from "../../base/08-imp-exp";
import heroes from '../../data/heroes';

describe('Pruebas heroes', () => {
    test('Debe devolver un heroe por id', () => {
        
        const id = 1;

        const heroe = getHeroeById(id);

        const heroeTest = heroes.find(h => h.id === id);

        expect( heroe ).toEqual(heroeTest);
    })

    test('Debe devolver undefined si no existe el heroe ', () => {
        const id = 10;

        const heroe = getHeroeById(id);

        expect( heroe ).toBe(undefined);
    })

    test('Evaluar heroes DC ', () => {
        const owner = 'DC';

        const heroes = getHeroesByOwner(owner);

        const heroesTest = heroes.filter((h) => { return h.owner === owner});

        expect(heroes).toEqual(heroesTest);

    })

    test('Evaluar heroes Marvel ', () => {
        const owner = 'Marvel'

        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
    })
    
    
    
    
})