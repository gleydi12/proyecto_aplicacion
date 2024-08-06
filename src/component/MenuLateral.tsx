import React from 'react'
import { Link } from 'react-router-dom'

const MenuLateral =() => {
  return (
    
        <nav>
        <ul id="menu_principal">
        
        <li>
            <Link to="/"><i className="material-icons-round">home</i> Inicio</Link>
        </li>
        
        <li>
            <Link to="/estudiantes"><i className="material-icons-round">groups</i> Estudiantes</Link>
         </li>
        <li>
            <Link to="/profesores"><i className="material-icons-round">groups</i> Profesores</Link>
        </li>
        <li>
            <Link to="/cursos"><i className="material-icons-outlined">computer</i> Cursos</Link>
        </li>
       
        <li>
         <Link to="/materias"><i className="material-icons-outlined">class</i> Materias</Link>
        </li>

        <li>
         <Link to="/horarios"><i className="material-icons-outlined">class</i> Horarios</Link>
        </li>

        <li>
         <Link to="/calificaciones"><i className="material-icons-outlined">grade</i> Calificaciones</Link>
        </li>
 
         </ul>
    </nav>
      )
    }
    
export default MenuLateral