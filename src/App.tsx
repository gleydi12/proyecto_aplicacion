import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import MenuLateral from './component/MenuLateral'
import Student from './Student/Student'
import Teacher from './Teacher/Teacher'
import Cursos from './Cursos/Cursos'
import Horarios from './Horarios/Horarios'
import Materias from './Materias/Materias'
import Calificaciones from './Calificaciones/Calificaciones';
import Login from './Pages/Login'
import Registro from './Pages/Registro'





function App() {

  return (   
  <>

<Header/>

 <main >
 
  <aside>
    <MenuLateral/>
  </aside>
 
  
  <section id="contenido">
    <Routes>
   
      <Route path='login' element={<Login/>}/>
      <Route path='registro' element={<Registro/>}/>
      <Route path="/" element={<h1>Inicio</h1>}/>
      <Route path='/estudiantes' element={<Student/>}/>
      <Route path="/profesores" element={<Teacher/>}/>
      <Route path="/cursos" element={<Cursos/>}/>
      <Route path="/Materias" element={<Materias/>}/>
      <Route path="/horarios" element={<Horarios/>}/>
      <Route path="/calificaciones" element={<Calificaciones/>}/>
      
    </Routes>
  
  </section>

 </main>

  </> 
)
}

export default App





