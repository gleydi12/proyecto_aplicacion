import React from 'react'
import StudentTable from './StudentTable'

const Student =() => {
  return (
    <>
    <h1 className='header-section-create'>Lista de todos los Estudiantes
    <button>
    Agregar Estudiante
</button>

    </h1>
    <StudentTable/>
    <hr/>
    </>
  )
}

export default Student