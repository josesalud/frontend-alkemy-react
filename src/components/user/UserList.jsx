import { useEffect } from "react";
import { useState } from "react";
import { getUsers, saveUser, deleteUser } from '../../services/userService'
import { UserItem } from './UserItem'
import { AddUser } from "./AddUser";
import Swal from 'sweetalert2';

export const UserList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
	  getAllUser()	  
	}, [])
	
	const getAllUser = async () =>{
		const listUsers = await getUsers();
		if(listUsers){
			setUsers(listUsers)
		}
		
	}

	const addUser = async (user) => {
		const newUser = await saveUser(user);
		console.log(newUser);
		//const newUser = { ...user, responseUser };
		setUsers([...users, newUser]);
	};

	const removeUser = (id) => {
		Swal.fire({
            title: '¿Estás seguro?',
            text: '¡Esta acción no se puede deshacer!',
            icon: 'warning',
            showCancelButton: true,  // Muestra el botón de cancelar
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
        }).then( async (result) => {
            if (result.isConfirmed) {
				setUsers(users.filter((user) => user.id !== id));
                const remov = await deleteUser(id);
                console.log(remov);
            }
        });
	};

	const editUser = async (updatedUser) => {
		const responseUser = await saveUser(updatedUser);
		console.log(responseUser);
		
		setUsers(
			users.map((user) =>
				user.id === responseUser.id ? responseUser : user
			)
		);
	};

	return (
		<>
			<div className="container mx-auto p-4">
				<h1 className="text-2xl font-bold mb-4">
						Lista de usuarios
				</h1>
				<div className="grid grid-cols-1 gap-4">
					
					<AddUser addUser={addUser}	/>
					
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{users.map((user) => (
							<UserItem
								key={user.id}
								user={user}
								deleteUser={removeUser}
								editUser={editUser}
							/>
						))
					}
				</div>
			</div>
		</>
	);
};
