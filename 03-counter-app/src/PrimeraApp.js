// FC (Functional component)

import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo }) => {


    return (
        <>
            <h1>{ saludo }</h1>
            <p>{ subtitulo }</p>
        </>
    );
       
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Subtitulo'
}

export default PrimeraApp;