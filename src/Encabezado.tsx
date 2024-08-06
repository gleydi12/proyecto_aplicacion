import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Encabezado = () => {

  const {state} = useLocation()
  console.log(state);

  return(
    <>
    <div className='container2'>
   <header >

   <li>
            <Link to="/"><i className="material-icons-round">home</i> Inicio</Link>
        </li>
       

<nav>
<Link to="/login">Iniciar sesion</Link>
<Link to="/registro">Registrarse</Link>
</nav>

<div className='user'>
  <span className='username'>Gleydi</span>
    <button className='btn-login'>Cerrar sesion</button>
</div>
</header>
</div>
<Outlet/>


    </>
  )
}

 
  
  
export default Encabezado