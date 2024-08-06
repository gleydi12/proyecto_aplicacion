import {useForm} from 'react-hook-form';

import React from 'react'

function Registro() {

  const {register, handleSubmit} = useForm();

  return (
    <div className='container1'>
   <form onSubmit={handleSubmit((data) => {
    console.log(data) 
   })}>

<h1>Registrarse</h1>

    <label htmlFor='nombre'>Nombre</label>
    <input type='text'{...register("nombre")} />

    <label htmlFor='email'>Email</label>
    <input type='text' {...register("email")}/>
 
    <label htmlFor='passsword'>Password</label>
    <input type='password' {...register("password")}/>

    <label htmlFor='confirmarpasssword'>Confirmar Password</label>
    <input type='password' {...register("confirmarpassword")}/>

    <button type="submit">Registarse</button>

   </form>
   </div>
  )
}

export default Registro