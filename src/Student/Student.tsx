import React from 'react'
import StudentTable from './StudentTable'
import Buscador from '../component/Buscador'
import PageHeader from '../component/PageHeader'

const Student =() => {
  return (
    <>
    <PageHeader>
    <h1>Lista de todos los estudiantes</h1>
    <button>Agregar estudiante</button>
    <Buscador/>
    </PageHeader>

    
    <StudentTable />
    <hr/>
  
    <hr/>
    </>
  )
}

export default Student