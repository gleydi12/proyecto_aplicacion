import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Modal from '../component/Modal';

const StudentTable = () => {
  const [rows, setRows] = useState([]); // Almacenar datos

  useEffect(() => {
    // Obtener datos en cada render
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/estudiantes');
      setRows(response.data);
    };
    fetchData();
  }, []);

  interface Row {
    id: number;
    nombre: string;
    apellido: string;
    telefono: string;
    email: string;
    direccion: string;
  }
  // fincion para editar un estudiante

  const editarStudent = (student: Row) => () => {
    // mostrar el modal
  };

  //mostar el alert de la funcion de eliminar
  const eliminarStudent = (student: Row) => () => {
    //@ts-ignore
    Swal.fire({
      title: 'Desea eliminar',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si',
      //@ts-ignore
    }).then((result) => {
      if (result.isConfirmed) {
        //eli
        fetch(`http://localhost:3001/estudiantes/${student.id}`, {
          method: 'DELETE',
        }).then(() => {
          //@ts-ignore
          Swal.fire({
            title: 'eliminar!',
            text: 'no',
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
      name: 'Direccion',
      selector: (row: Row) => row.direccion,
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
              onClick={editarStudent(row)}
              className="btn btn-primary">
              <i className="material-icons-outlined">edit</i>
            </button>
            <button
              onClick={eliminarStudent(row)}
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
