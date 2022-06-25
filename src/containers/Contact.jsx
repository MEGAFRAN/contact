import React from 'react'
import { ListContact } from '../components/ListContac';
import { ListTitle } from '../components/ListTitle';
import { deleteApi } from '../deleteApi';
import { useGetApi } from '../hook/useGetApi';

const Contact = () => {
	const lisTitle = {
		name: 'Nombres y Apellidos',
		age: 'Edad actual',
		phone: 'Telefono',
		dateofbirth: 'Fecha de nacimiento',
		addres: 'Direccion de residencia',
		email: 'Correo electronico'
	}
	const API = 'http://localhost:4000/products';
	const {characters}=useGetApi(API);
	console.log(characters);
	const onDelete = (contact) =>{
		console.log(`el id es ${contact.id}`)
		const APIDelete = `http://localhost:4000/products/${contact.id}`
		deleteApi(APIDelete);
	}
	const onEdit = (contact) =>{
		console.log(`el nombre es ${contact.name}`)
	}
	return (
		<div>
				<ListTitle
					name={lisTitle.name}
					age={lisTitle.age}
					phone={lisTitle.phone}
					dateofbirth={lisTitle.dateofbirth}
					addres={lisTitle.addres}
					email={lisTitle.email}
				/>
				{characters && characters.map(contact => (
					<ListContact 
						key={contact.id}
						name={contact.name}
						age={28}
						phone={contact.phone}
						dateofbirth={contact.dateofbirth}
						addres={contact.addres}
						email={contact.email}
						onDelete={() => onDelete(contact)}
						onEdit={() => onEdit(contact)}
					/>
				))}
		</div>
	)
}

export { Contact };