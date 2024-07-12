import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import MenuLateral from './component/MenuLateral'
import Student from './Student/Student'
import Teacher from './Teacher/Teacher'
import Cursos from './Cursos/Cursos'
import Asignaturas from './Asignaturas/Asignaturas'
import Calificaciones from './Calificaciones/Calificaciones'

function App() {

  return (
  <>

<Header/>
 <main>

  <aside>
    <MenuLateral/>
  </aside>
   

  <section id="contenido">
    <Routes>
      <Route path="/" element={<h1>Inicio</h1>}/>
      <Route path='/estudiantes' element={<Student/>}/>
      <Route path="/profesores" element={<Teacher/>}/>
      <Route path="/cursos" element={<Cursos/>}/>
      <Route path="/asignaturas" element={<Asignaturas/>}/>
      <Route path="/calificaciones" element={<Calificaciones/>}/>
      
    </Routes>
  
  </section>
 </main>
  </> 
)
}

export default App





