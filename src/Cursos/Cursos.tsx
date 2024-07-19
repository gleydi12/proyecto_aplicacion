import React from 'react'
import CursosTable from './CursosTable'

const Cursos =() =>{
  return (
    <>
    <h1 className='header-section-create'>Lista de todos los Cursos
  <button>Agregar Curso</button>
    </h1>
    <CursosTable/>
    <hr/>
    </>
  )
}

export default Cursos