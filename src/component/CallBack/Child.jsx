import React, { memo } from 'react'

const Child = ({todo,addTodo}) => {
    console.log('child render')
  return (
    <>
    {
        todo.map((ele)=>{
            return (
                <p>{ele}</p>
            )
        })
    }
    <button onClick={addTodo}>add</button>
    </>
  )
}

export default memo(Child)