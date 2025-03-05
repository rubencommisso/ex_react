import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(()=>{
     async function fetchData(){
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(url)
            if(response.status != 200) throw new Error("errore nella chiamata") 
            const result = await response.json()
            setData(result)
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
     }
     fetchData()
    },[url])
    
    return {data, loading, error};
};

export default useFetch;