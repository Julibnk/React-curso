import PrimeraApp from "../PrimeraApp";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => {
    // test('debe mostrar el mensaje Hola sou Julian ', () => {

    // Test sin enzyme
    //     const saludo = 'Hola soy Julian';

    //     const { getByText } = render(<PrimeraApp saludo={saludo}/>);

    //     expect( getByText( saludo ) ).toBeInTheDocument()
    // })

    test('debe mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola soy Jul';
        const wrapper = shallow( <PrimeraApp saludo={saludo} />);

        expect( wrapper ).toMatchSnapshot();

    })
    
    test('debe mostrar el subtitulo enviado por props', () => {

        const saludo = 'Hola soy Jul';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow( <PrimeraApp saludo={saludo} subtitulo={subtitulo} />);

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subtitulo);

    })

}) 
