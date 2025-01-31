import React, { useState } from "react"


export const AddTask = ({add}) => {
    const formRef = React.useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        add(formJson);
        formRef.current.reset();
    }

    return (
        <div className=" bg-gray-300 shadow-md rounded-lg p-6 mb-4">
            <h2 className="text-2xl font-bold mb-4">
                Agregar tarea
            </h2>
            <form onSubmit={onSubmit} ref={formRef}>
                <div className="grid grid-cols-3">
                    <div className="mb-4 mx-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Nombre:
                        </label>
                        <input
                            type="text"
                            name="name"                          
                            className="  border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4 mx-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Descripción:
                        </label>
                        <input
                            type="text"
                            name="description"                            
                            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-end  mb-4 mx-2">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Guardar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
