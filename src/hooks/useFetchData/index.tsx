import axios from "axios"
import { useEffect, useState } from "react"

const useFetchData = (url:string) => {
    const [data , setData] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            const data = await axios.get(url)
            setData(data.data)
        }
        fetchData()
    },[url])

    return [data]
}

export default useFetchData