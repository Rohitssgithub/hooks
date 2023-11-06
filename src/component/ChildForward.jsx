import React, { forwardRef, useRef } from 'react'

const ChildForward = forwardRef((props, ref) => {
    return (
        <>
            <input type="text" ref={ref} />
        </>
    )
})


export default ChildForward