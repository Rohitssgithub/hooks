import React, { useState, useEffect } from 'react';

function DebounceReact() {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const debounceDelay = 1000;

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
                const response = await fetch(`https://dummyjson.com/products/search?q=${debouncedSearchTerm}`);
                const data = await response.json();
                console.log('data', data)
                setSearchResults(data?.products);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        fetchSearchResults();
    }, [debouncedSearchTerm]);

    console.log('debouncedSearchTerm', debouncedSearchTerm)

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {searchResults?.map((ele, index) => (
                    <li key={index}>{ele.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default DebounceReact;
