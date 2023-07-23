import axios from 'axios'
import {useState } from 'react'

export const useFecth = (baseUrl) => {
    
    const [infoApi, setinfoApi] = useState({})
    //Create-crear un nuevo registro
    const createRegister=(data)=>{
        const url=`${baseUrl}`
        axios.post(url,data)
            .then(res=>{
                setinfoApi([...infoApi,res.data]) 
            })
            .catch(error=>console.log(error))
    }

    // Read-Leer o traer informacón de la Api
    const readApi=()=>{
        const url=`${baseUrl}`
        axios.get(url)
            .then(res=>setinfoApi(res.data))
            .catch(error=>console.log(error))
    }

    //Update-Actualizar un registro
    const updateRegister=(id,data)=>{
       const url=`${baseUrl}/${id}`
        axios.put(url,data)
            .then(res=>{
                infoApi.map(user=>{
                    if(user.id===id){
                        return res.data
                    }else{
                        return user
                    }
                })
            })
            .catch(error=>console.log(error))
    }

    //delete-eliminar un registro
    const deleteRegister=(id)=>{
       const url=`${baseUrl}/${id}`
        axios.delete(url)
            .then(res=>{
                setinfoApi(infoApi.filter(element=>element.id!=id)) 
            })
            .catch(error=>console.log(error))
    }
    return [infoApi,createRegister,readApi,updateRegister,deleteRegister]
}
