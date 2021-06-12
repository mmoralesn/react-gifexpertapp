import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory= ({ setCategories }) => {

    const [inputValue, setinputValue] = useState(''); //Poner el valo default en string vacío, de lo contrario será undefined

    const handleInputValue = (e) => {
        //console.log(e.target.value);
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {

        //Para prevenir el comportamiento por defecto del formulario
        e.preventDefault();
        //console.log('Submit hecho');
        //console.log(setCategories);
        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [ inputValue, ...cats] );
            setinputValue('');
        }
        

    }

    return (
        <form onSubmit= { handleSubmit }>
            <input 
                type="text"
                value= {inputValue}
                onChange= { handleInputValue }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
