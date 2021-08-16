import CounterApp from '../CounterApp';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";

describe('Pruebas CounterApp', () => {

    let wrapper = shallow(<CounterApp />);;

    beforeEach( () => {
        wrapper = shallow(<CounterApp />);
    })

    test('Mostrar CounterApp correctamente  ', () => {
        
    
        expect( wrapper ).toMatchSnapshot()

    })

    test('Mostrar valor 100 por defecto', () => {
        
        const wrapper = shallow(<CounterApp value={ 100 }/>)


        expect( wrapper.find('h2').text().trim() ).toBe('100')

    })

    test('incrementar boton +1 ', () => {
        
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim()
        expect(  counterText ).toBe('101');

    })

    test('reducir boton -1 ', () => {

        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim()
        expect(  counterText ).toBe('99');

    })


    test('debe de colocar el valor por defecto con el btn reser', () => {

        const wrapper = shallow(<CounterApp value={ 105 }/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('105')
        
    })
    
    
    
    
})
