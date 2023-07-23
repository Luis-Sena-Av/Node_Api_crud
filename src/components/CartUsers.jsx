import React from 'react'

export const CartUsers = ({user,deleteRegister,setupdateinfo,setshow,show,setboton}) => {

    const handledelete=(e)=>{
        deleteRegister(e.target.id)
    }

    const handleUptade=()=>{
        setupdateinfo(user)
        setshow(!show)
        setboton(false)
    }
   
  return (
    <div className='cart'>
        <h2 className='nombre'>{user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1)} {user.last_name.charAt(0).toUpperCase() + user.last_name.slice(1)}</h2>
        <hr />
        <div className='info'>
            <p>Correo <br /><span><i className='bx bx-envelope'></i> {user.email}</span></p>
            <p>Cumpleaños <br /> <span><i className='bx bx-gift'></i>{user.birthday.substr(0,10)}</span></p>
        </div>
        <hr/>
        <div className='iconcart'>
            <i onClick={handledelete} id={user.id} className='bx bx-trash'></i>
            <i onClick={handleUptade} id={user.id} className='bx bx-pencil'></i>
        </div>

    </div>

  )
}
