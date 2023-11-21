import React, { createContext, useContext, useState } from 'react'

let userContext = createContext()

const UseContextFun = ({ children }) => {
    let [name, setName] = useState('rohit')
    return (
        <>
            <userContext.Provider value={{ name }}>
                {children}
            </userContext.Provider>
        </>
    )
}

export { UseContextFun, userContext }