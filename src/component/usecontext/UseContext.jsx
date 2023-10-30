import React, { useState, createContext } from 'react'
const userContext = createContext();


const UseContextcom = ({ children }) => {
    console.log(children)

    let [name, setName] = useState('rohit')

    return (
        <userContext.Provider value={{ name }}>
            {children}
        </userContext.Provider>
    )
}

export { UseContextcom, userContext }