import React, { useState } from 'react'

const Debounce = () => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (value) => {
        console.log('Input value:', value);
    }
    const debounce = (func, delay) => {
        let timer;
        return (...args) => {
            console.log(...args)
            clearTimeout(timer);
            timer = setTimeout(() =>
                func(...args)
                , delay);
        };
    };
    const debouncedHandleInputChange = debounce(handleInputChange, 2000); // Adjust the delay as needed
    const onInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        debouncedHandleInputChange(newValue);
    };
    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={onInputChange}
                placeholder="Type something..."
            />
            <p>{inputValue}</p>
        </>
    )

}

export default Debounce