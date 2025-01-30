import React, { useState } from "react";

export const UserItem = ({ user, deleteUser, editUser }) => {

	//const formRef = React.useRef();

	const [isEditing, setIsEditing] = useState(false);
	const [editedUser, setEditedUser] = useState(user);

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log(name, ' : ',value);
				
		setEditedUser({ ...editedUser, [name]: value });
		console.log(editedUser);
		
	};

	const handleSave = (e) => {
		e.preventDefault();
		console.log(editedUser);
		
		editUser(editedUser);
		setIsEditing(false);
	};

	return (
		<>
			{isEditing ? (
				<div className="">
					<div className=" shadow-md rounded-lg p-6">
						<h2 className="text-2xl font-bold mb-4">
							Editar usuario
						</h2>
						<form onSubmit={handleSave} >
							<div className="mb-4">
								<label className="block text-gray-700 text-sm font-bold mb-2">
									Nombre:
								</label>
								<input
									type="text"
									name="name"
									defaultValue={user.name}
									onChange={handleChange}
									className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
								/>
							</div>
							<div className="mb-4">
								<label className="block text-gray-700 text-sm font-bold mb-2">
									Correo:
								</label>
								<input
									type="email"
									name="email"
									defaultValue={user.email}
									onChange={handleChange}
									className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
								/>
							</div>
							<div className="flex items-end justify-items-end">
								<button
									type="submit"
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
								>
									Guardar
								</button>
								<button type="button" onClick={() => setIsEditing(false)}className="mx-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
									regresar
								</button>
							</div>
						</form>
					</div>
				</div>
			) : (
				<div className="bg-gray-300 shadow-md rounded-lg p-6">
					<h3 className="text-xl font-bold mb-2">ID: {user.id}</h3>
					<h3 className="text-xl font-bold mb-2">
						Nombre: {user.name}
					</h3>
					<p className="mb-4">Email: {user.email}</p>
					<button
						onClick={() => setIsEditing(true)}
						className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
					>
						Edit
					</button>
					<button
						onClick={() => deleteUser(user.id)}
						className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Delete
					</button>
				</div>
			)}
		</>
	);
};
