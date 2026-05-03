import axios from "axios"
import { useEffect, useState } from "react"

const useToyData = () =>{
    const [toys, setToys] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, seterror] = useState(null)

    useEffect(()=>{
        axios('../toyData.json')
        .then(data=> setToys(data.data))
        .catch(err=> seterror(err))
        .finally(()=> setLoading(false))
    },[])

    return{toys, loading, error}
}

export default useToyData;