import React from 'react'
import CustomHook from './CustomHook'
const Com = () => {
    const [data] = CustomHook("https://jsonplaceholder.typicode.com/todos");

    return (
        <>
            {data &&
                data.map((item) => {
                    return <p key={item.id}>{item.title}</p>;
                })}
        </>
    );
}

export default Com