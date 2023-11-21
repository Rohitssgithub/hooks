import React, { useRef } from 'react'
import ChildForwardRefCom from './ChildForwardRefCom'

const ForWardRefExample = () => {
    let mainref = useRef()
    return (
        <>
            <ChildForwardRefCom ref={mainref} />
            <button onClick={() => mainref.current.focus()}>forward ref</button>
        </>
    )
}

export default ForWardRefExample