import React, { useEffect } from 'react'

const Promises = () => {
    // function fetchData(callback) {
    //     setTimeout(() => {
    //         const data = "Hello, this is some data!";
    //         callback(data);
    //     }, 2000);
    // }

    // function handleData(data) {
    //     console.log("Data received:", data);
    // }


    // useEffect(() => {
    //     fetchData(handleData);
    // }, [])

    // const promisesRes = () => {
    //     return new Promise((resolve, rej) => {
    //         setTimeout(() => {
    //             let val = true;
    //             let data = 'hello';
    //             if (val) {
    //                 resolve(data)
    //             }
    //             else {
    //                 rej('error')
    //             }
    //         }, 3000)
    //     })
    // }

    // promisesRes()
    //     .then((val) => console.log(val))
    //     .catch((err) => console.log(err))



    // function sum(...numbers) {
    //     return numbers.reduce((acc, num) => acc + num, 0);
    // }
    // const result1 = sum(1, 2, 3, 4, 5);
    // console.log(result1);
    // const result2 = sum(10, 20, 30);
    // console.log(result2);
    // const result3 = sum(5);
    // console.log(result3);

    // function multiply(factor, ...numbers) {
    //     return numbers.map(num => num * factor);
    // }

    // const multipliedNumbers = multiply(2, 1, 2, 3, 4);
    // console.log(multipliedNumbers);


    let eles = 0;
    function sum(...x) {
        x.forEach((ele) => {
            return eles += ele
        })
        return eles
    }

    const numbers = [1, 2, 3];

    console.log(sum(...numbers));



    return (
        <>


        </>
    )
}

export default Promises