import React, { useReducer } from 'react'

const UseReducer = () => {

    const reducer = (state, action) => {
        console.log('state.count', state.count)
        switch (action.type) {
            case 'INCRE':
                return { count: state.count + 1 }
            case 'DECRE':
                if (state.count > 0) {
                    return { count: state.count - 1 }
                }
                return state

            default:
                return state
        }

    }
    let initialState = { count: 0 }
    let [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>


            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: 'INCRE' })}>incre</button>
            <button onClick={() => dispatch({ type: 'DECRE' })}>incre</button>

        </>
    )
}

export default UseReducer