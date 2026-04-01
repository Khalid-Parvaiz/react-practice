import axios from "axios"
import { useEffect, useState } from "react"

const useFetchData = <T,>(url:string): [T | null] => {
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

// export default function useFetchData<T>(url:string): [T | null] {
//     const [data , setData] = useState(null)

//     useEffect(() =>{
//        const fetchData = async() => {
//         const data = await axios.get(url)
//         setData(data.data)
//        }
//        fetchData
//     },[url])
//     return [data]

// }