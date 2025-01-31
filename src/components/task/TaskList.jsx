import { useEffect } from "react";
import { useState } from "react";
import { saveTask, getAllTask, deleteTask } from "../../services/taskService";
import { TaskItem } from "./TastItems";
import { AddTask } from "./AddTask";
import Swal from 'sweetalert2';

export const TaskList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        getAll()
    }, [])

    const getAll = async () => {

        const list = await getAllTask();
        if (list) {
            setList(list)
            console.log(list);
        }

        console.log("inicializando la lista");
    }

    const remove = async (id) => {

        Swal.fire({
            title: '¿Estás seguro?',
            text: '¡Esta acción no se puede deshacer!',
            icon: 'warning',
            showCancelButton: true,  // Muestra el botón de cancelar
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
        }).then( async (result) => {
            if (result.isConfirmed) {
                setList(list.filter((item) => item.id !== id));
                const remov = await deleteTask(id);
                console.log(remov);
            }
        });

    };

    const edit = async (update) => {
        console.log(update);
        const respose = await saveTask(update);
        setList(
            list.map((item) =>
                item.id === respose.id ? respose : item
            )
        );
    };

    const add = async (item) => {
        const newItem = await saveTask(item);
        console.log(newItem);
        setList([newItem, ...list,]);
    }

    return (
        <>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">
                    Lista de tareas
                </h1>
                <div className="grid grid-cols-1 gap-4">
                    <AddTask add={add} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {list.map((item) => (
                        <TaskItem
                            key={item.id}
                            item={item}
                            remove={remove}
                            edit={edit}
                        />
                    ))
                    }
                </div>
            </div>
        </>
    );
};
