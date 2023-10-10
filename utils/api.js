import { baseUrl } from "./baseUrl"


export const useFetchFromNext = async (endpoint) =>{
    const res = await fetch(`${baseUrl}${endpoint}`)
    const data = await res.json()
    console.log(data)
    return data;
}