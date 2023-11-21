import React, { useState } from 'react'

const HighOrderCom = (WrappedComponent) => {

    function main() {
        let [count, setCount] = useState(0)

        const handlic = () => {
            setCount(count + 1)
        }
        return <WrappedComponent count={count} handlic={handlic} />
    }
    return main
}

export default HighOrderCom