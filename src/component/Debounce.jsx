// import React, { useState } from 'react'

// const Debounce = () => {
//     const [inputValue, setInputValue] = useState('');
//     const handleInputChange = (value) => {
//         console.log('Input value:', value);
//     }
//     const debounce = (func, delay) => {
//         let timer;
//         return (...args) => {
//             console.log(...args)
//             clearTimeout(timer);
//             timer = setTimeout(() =>
//                 func(...args)
//                 , delay);
//         };
//     };
//     const debouncedHandleInputChange = debounce(handleInputChange, 2000); // Adjust the delay as needed
//     const onInputChange = (event) => {
//         const newValue = event.target.value;
//         setInputValue(newValue);
//         debouncedHandleInputChange(newValue);
//     };
//     return (
//         <>
//             <input
//                 type="text"
//                 value={inputValue}
//                 onChange={onInputChange}
//                 placeholder="Type something..."
//             />
//             <p>{inputValue}</p>
//         </>
//     )

// }

// export default Debounce


import React, { useState, useEffect } from 'react';

function DebounceExample() {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const debounceDelay = 300; 

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, debounceDelay);

        return () => {
            clearTimeout(debounceTimer);
        };
    }, [searchTerm]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await fetch(`your_api_endpoint?search=${debouncedSearchTerm}`);
                const data = await response.json();
                setSearchResults(data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        if (debouncedSearchTerm) {
            fetchSearchResults();
        } else {
            // Clear search results when the search term is empty
            setSearchResults([]);
        }
    }, [debouncedSearchTerm]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {searchResults.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>
        </div>
    );
}

export default DebounceExample;
