import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const FormUser = ({createRegister,updateinfo,show,setshow,setupdateinfo,boton,updateRegister,setboton}) => {

    const {register,reset,handleSubmit}=useForm()

    useEffect(()=>{
        reset(updateinfo)
    },[updateinfo])
    

    const submit=(data)=>{
        if(boton){
            createRegister(data)
            reset({
                email:"",
                password: "",
                first_name: "",
                last_name:"",
                birthday:"",    
            })
           
        }else{
            updateRegister(updateinfo.id,data)
            reset({
                email:"",
                password: "",
                first_name: "",
                last_name:"",
                birthday:"",    
            })
            setboton(true)
        }        
        setupdateinfo({})
    }

    const handleshow=()=>{
        setshow(!show)
    }

  return (
    <div className={`modalform ${show && 'close'}`}>        
        <form className='form' onSubmit={handleSubmit(submit)} >
        <i onClick={handleshow} className='bx bx-x'></i>
        <div className='formUser'>
        <>{boton?<h2>Nuevo usuario</h2>:<h2>Actualizar usuario</h2>}</>
            <li>Nombre<input {...register('first_name')} id='first_name' type="text" required/></li>
            <li>Apellidos<input {...register('last_name')} id='last_name' type="text" required/></li>
            <li>Correo<input {...register('email')} id='email' type="email" required/></li>
            <li>Contraseña<input {...register('password')} id='password' type="password" required/></li>
            <li>Cumpleaños<input {...register('birthday')} id='birthday' type="date" required /></li>
            <button className='bt-form'>{boton?<span>Crear</span>:<span>Actualizar</span>} </button>
        </div>            
        </form>
    </div>
  )
}

export default FormUser