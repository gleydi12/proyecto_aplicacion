import React from 'react'
import TeacherTable from './TeacherTable'


const Teacher =() => {
  
  return (
    <>
    <h1 className='header-section-create'>Lista de todos los Maestros
    <button>Agregar Profesor</button>

    </h1>
    <TeacherTable />
  
    <hr/>
    </>
  )
}

export default Teacher