import React, { useEffect, useState } from 'react'
import axios from 'axios'
const DeBounceing = () => {

    let [searchValue, setSerchValue] = useState('');
    let [data, setData] = useState([])
    let [debounceData, setDebounceData] = useState('')

    const handleChanges = (e) => {
        setSerchValue(e.target.value)
    }
    const getData = async (params) => {
        let res = await axios.get(`https://dummyjson.com/products/search?q=${params}`)
        setData(res?.data?.products)
    }

    useEffect(() => {
        let debounce = setTimeout(() => {
            getData(searchValue)
        }, 1000);

        return () => {
            clearTimeout(debounce)
        }
    }, [searchValue])



    return (
        <>
            <input type="text" value={searchValue} onChange={(e) => handleChanges(e)} />

            {
                data?.map((ele) => {
                    return (
                        <p>{ele.title}</p>
                    )
                })
            }
        </>
    )
}

export default DeBounceing