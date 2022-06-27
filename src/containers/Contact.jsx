import React from 'react'
import { useContext } from 'react';
import { Loading } from '../components/Loading';
import { Table } from '../components/Table';
import { Appcontext } from '../context/Appcontext';
import styles from '../styles/containers/Contact.module.scss';

const Contact = () => {
	const {searchContact,loading}=useContext(Appcontext);
	const lisTitle = {
		name: 'Nombres y Apellidos',
		age: 'Edad actual',
		phone: 'Telefono',
		dateofbirth: 'Fecha de nacimiento',
		addres: 'Direccion de residencia',
		email: 'Correo electronico',
		actions: 'Acciones'
	}
	


	return (
		<div className={styles.container}>
				
				{loading && <Loading/>}
				{(searchContact && !loading) && <Table listTitle={lisTitle}/>}
				
		</div>
	)
}

export { Contact };