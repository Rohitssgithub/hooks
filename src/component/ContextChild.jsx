import React from 'react'
import { userContext } from './UseContext';
import { useContext } from 'react';

const ContextChild = () => {

    let { name } = useContext(userContext)
    console.log('name', name)
    return (
        <>
        </>
    )
}

export default ContextChild