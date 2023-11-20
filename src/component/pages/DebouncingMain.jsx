import React, { useEffect, useState } from 'react'
import axios from 'axios';
const DebouncingMain = () => {

    let [search, setSearch] = useState('');
    let [data, setData] = useState([])

    let getData = async (params) => {
        let res = await axios.get(`https://dummyjson.com/products/search?q=${params}`)
        setData(res?.data?.products)
    }

    useEffect(() => {
        let deboounce = setTimeout(() => {
            getData(search)
            return () => {
                clearTimeout(deboounce)
            }
        }, 1000);
    }, [search])
    return (
        <>
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
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

export default DebouncingMain