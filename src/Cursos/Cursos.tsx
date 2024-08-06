import React from 'react'
import CursosTable from './CursosTable'
import Buscador from '../component/Buscador'

const Cursos =() =>{
  return (
    <>
    <h1 className='header-section-create'>Lista de todos los Cursos
  <button>Agregar Curso</button>

  <Buscador/>
  
    </h1>
    <CursosTable/>
    <hr/>
    </>
  )
}

export default Cursos