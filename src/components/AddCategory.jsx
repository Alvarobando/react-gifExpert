import { useState } from "react";
import PropTypes from 'prop-types';


export const AddCategory = (
    { 
        // setCategories ,
        onNewCategory 
    }
    ) => {

    const [inputValue, setInputValue] = useState();

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const OnSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length < 1) return;
        // setCategories(cat => [inputValue, ...cat]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (

        <form onSubmit={OnSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            // onChange={(event) =>{onInputChange(event)}}
            />
        </form>

    )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}