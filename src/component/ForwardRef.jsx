import React, { useRef } from 'react'
import ChildForward from './ChildForward'

const ForwardRef = () => {
    let mainref = useRef()
    return (
        <>
            <ChildForward ref={mainref}></ChildForward>
            <button onClick={() => mainref.current.focus()}>Click</button>
        </>
    )
}

export default ForwardRef