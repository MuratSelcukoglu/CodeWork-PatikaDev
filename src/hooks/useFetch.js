import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../API';
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {

        try {
            const { data: responseData } = await axios.get(url) // url den datayı alıp responseData ya kopyaladık
            setData(responseData)
            setLoading(false)
        } catch (err) {
            setError(err.message);
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [url]) // url güncellendikçe yeni daha çekmesi için
    return { data, loading, error, fetchData }
}
export default useFetch;