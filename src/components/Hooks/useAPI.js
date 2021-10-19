import { useEffect, useState } from "react";


const useAPI = () => {
    const [useApi, setUseApi]=useState([])
    useEffect(()=>{
        fetch('./services.json')
        .then(res=>res.json())
        .then(data=>setUseApi(data))
    },[])
    return {useApi,setUseApi};
};

export default useAPI;