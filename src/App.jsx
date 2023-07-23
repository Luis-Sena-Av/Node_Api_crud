import { useEffect, useState, useSyncExternalStore } from 'react'
import './App.css'
import { useFecth } from './hooks/useFecth'
import { CartUsers } from './components/CartUsers'
import FormUser from './components/FormUser'

function App() {
  
  const baseUrl="https://users-crud-oujl.onrender.com/api/v1/users/"
  const [infoApi,createRegister,readApi,updateRegister,deleteRegister]=useFecth(baseUrl)
  const [show, setshow] = useState(true)
  const [boton,setboton] = useState()
  const [updateinfo, setupdateinfo] = useState({})
  
  useEffect(()=>{
    readApi()
  },[infoApi])  

  const handleshow=()=>{
    setboton(true)
    setshow(!show)    
    setupdateinfo({
      email:"",
      password: "",
      first_name: "",
      last_name:"",
      birthday:"",    
    })
  }

  return (
    <div >      
     
      <div className='principal'>

        <div className='primer'>
          <div className='addUser'>
            <h2>Usuarios</h2>        
            <button className='new' onClick={handleshow}><i className='bx bx-plus'></i> Crear un nuevo usuario</button>
          </div>  
        </div>

        {Object.keys(infoApi).length? <div className='contencart'>{infoApi?.map(user=><CartUsers setboton={setboton} show={show} setshow={setshow} user={user} key={user.id} deleteRegister={deleteRegister} setupdateinfo={setupdateinfo}/>)}</div>:<div className='mensaje'>No hay usuarios registrados hasta el momento</div> } 
      </div>

      <FormUser setboton={setboton} updateRegister={updateRegister} boton={boton} setupdateinfo={setupdateinfo} show={show} setshow={setshow} createRegister={createRegister} updateinfo={updateinfo} />
    
    </div>
  )
}

export default App
