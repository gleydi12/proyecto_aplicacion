import axios from "axios";
import React, {useEffect, useState} from "react";
import DataTable from "react-data-table-component";

const StudentTable =() => {
    const [rows, setRows] = useState([]); // para almacenar los datos

    useEffect(() => {
    const fetchData = async () =>{
        const response = await axios.get("http://localhost:3000/estudiantes");
        setRows(response.data);
    
    };
    fetchData();
}, []);

interface Row{
    id:number;
    nombre: string;
    apellido: string;
    telefono: string;
    email: string;
    direccion: string;
}
const editarStudent = (id: number) => () => {
    alert(id);
    }
    const eliminarStudent = (id: number) => () => {
       alert(id);
    }
        const columns = [
            {
                name: "ID",
                selector: (row:Row) => row.id,
            },
            {
                name: "Nombre",
                selector: (row:Row) => row.nombre,
            },
            {
                name: "Apellido",
                selector: (row:Row) => row.apellido,
            },
            {

                name: "Telefono",
                selector: (row:Row) => row.nombre,
            },
            {

                name: "Direccion",
                selector: (row:Row) => row.direccion,
            },
            {

                name: "Email",
                selector: (row:Row) => row.email,
            },
            {
        name: "Acciones",
        cell: (row: Row) => <><div id= 'tableButtons'>
         <button onClick={editarStudent(row.id)} className="btn btn-primary"><i className="material-icons-outlined">edit</i></button>
         <button onClick={eliminarStudent(row.id)} className="btn btn-primary"><i className="material-icons-outlined">delete</i></button>
         </div>
            </>
       }
    ];
    
    return (
    
        <div className='container my-5'>
        <DataTable columns={columns} data= {rows}/>
    </div>
      )
    }
    

export default StudentTable