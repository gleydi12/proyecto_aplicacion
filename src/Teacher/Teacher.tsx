import React from 'react'
import TeacherTable from './TeacherTable'
import Buscador from '../component/Buscador'


const Teacher =() => {
  
  return (
    <>
    <h1 className='header-section-create'>Lista de todos los Maestros
    <button>Agregar Profesor</button>
    <Buscador/>

    </h1>
    <TeacherTable />
  
    <hr/>
    </>
  )
}

export default Teacher