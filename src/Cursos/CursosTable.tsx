import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Modal from '../component/Modal';

const CursosTable = () => {
  const [rows, setRows] = useState([]); // Almacenar datos

  useEffect(() => {
    // Obtener datos en cada render
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/cursos');
      setRows(response.data);
    };
    fetchData();
  }, []);

  interface Row {
    id: number;
    nombre_curso: string;
    descripcion: string;
   
  }
  // fincion para editar un curso

  const editarCurso = (curso: Row) => () => {
    // mostrar el modal
  };
    
  //mostar el alert de la funcion de eliminar
  const eliminarCurso = (curso: Row) => () => {
    //@ts-ignore
    Swal.fire({
      title: 'Desea eliminar',
      text: "Desea eliminar el Curso",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si',
      //@ts-ignore
    }).then((result) => {
      if (result.isConfirmed) {
        //eli
        fetch(`http://localhost:3001/cursos/${curso.id}`, {
          method: 'DELETE',
        }).then(() => {
          //@ts-ignore
          Swal.fire({
            title: 'eliminado!',
            text: 'curso eliminado',
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
      name: 'Nombre del curso',
      selector: (row: Row) => row.nombre_curso,
    },
    {
      name: 'Descricion',
      selector: (row: Row) => row.descripcion,
    },
   

    {
      name: 'Acciones',
      cell: (row: Row) => (
        <>
          <div id="tableButtons">
            <button
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={editarCurso(row)}
              className="btn btn-primary">
              <i className="material-icons-outlined">edit</i>
            </button>
            <button
              onClick={eliminarCurso(row)}
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

export default CursosTable