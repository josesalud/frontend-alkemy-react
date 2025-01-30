import { useEffect } from "react";
import { useState } from "react";
import { getUsers, saveUser } from '../../services/userService'
import { UserItem } from './UserItem'
import { AddUser } from "./AddUser";

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

	const deleteUser = (id) => {
		setUsers(users.filter((user) => user.id !== id));
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
					
					<AddUser	addUser={addUser}	/>
					
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{users.map((user) => (
							<UserItem
								key={user.id}
								user={user}
								deleteUser={deleteUser}
								editUser={editUser}
							/>
						))
					}
				</div>
			</div>
		</>
	);
};
