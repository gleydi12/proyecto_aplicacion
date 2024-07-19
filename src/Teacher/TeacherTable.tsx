import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Modal from '../component/Modal';

const StudentTable = () => {
  const [rows, setRows] = useState([]); // Almacenar datos

  useEffect(() => {
    // Obtener datos en cada render
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/profesores');
      setRows(response.data);
    };
    fetchData();
  }, []);

  interface Row {
    id: number;
    nombre: string;
    apellido: string;
    especialidad: string;
    telefono: string;
    email: string;
  
  }
  // fincion para editar un profesor

  const editarTeacher = (teacher: Row) => () => {
    // mostrar el modal
  };
    
  //mostar el alert de la funcion de eliminar
  const eliminarTeacher = (teacher: Row) => () => {
    //@ts-ignore
    Swal.fire({
      title: 'Desea eliminar',
      text: "Desea eliminar el profesor",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si',
      //@ts-ignore
    }).then((result) => {
      if (result.isConfirmed) {
        //eli
        fetch(`http://localhost:3001/profesores/${teacher.id}`, {
          method: 'DELETE',
        }).then(() => {
          //@ts-ignore
          Swal.fire({
            title: 'eliminado!',
            text: 'profesor eliminado',
            icon: 'success',
          });
        });
      }
    });
  };

  const columns = [
    {
      name: 'ID',
      selector: (row: Row) => row.id,
    },
    {
      name: 'Nombre',
      selector: (row: Row) => row.nombre,
    },
    {
      name: 'Apellido',
      selector: (row: Row) => row.apellido,
    },
    {
      name: 'Telefono',
      selector: (row: Row) => row.nombre,
    },
    {
      name: 'Especialidad',
      selector: (row: Row) => row.especialidad,
    },
    {
      name: 'Email',
      selector: (row: Row) => row.email,
    },

    {
      name: 'Acciones',
      cell: (row: Row) => (
        <>
          <div id="tableButtons">
            <button
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={editarTeacher(row)}
              className="btn btn-primary">
              <i className="material-icons-outlined">edit</i>
            </button>
            <button
              onClick={eliminarTeacher(row)}
              className="btn btn-danger">
              <i className="material-icons-outlined">delete</i>
            </button>
           
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="container my-5">
      <DataTable
        columns={columns}
        data={rows}
      />
      <Modal />
    </div>
  );
};

export default StudentTable;
