import React from 'react'
import { useContext } from 'react';
import { Appcontext } from '../context/Appcontext';
import {AiOutlineEdit} from 'react-icons/ai';
import {RiDeleteBin6Line} from 'react-icons/ri';
import styles from '../styles/components/Table.module.scss';

const Table = ({listTitle}) => {
  const {searchContact,setModalEdit,setFormEdit,deleteContact}=useContext(Appcontext);
  const onEdit = (contact) => {
		setModalEdit(true);
		setFormEdit(contact);
	}
  return (
    <table className={styles.container}>
        <tr className={styles.title}>
            <th>{listTitle.name}</th>
            <th>{listTitle.age}</th>
            <th>{listTitle.phone}</th>
            <th>{listTitle.dateofbirth}</th>
            <th>{listTitle.addres}</th>
            <th>{listTitle.email}</th>
            <th>{listTitle.actions}</th>
        </tr>
        {searchContact && searchContact.map(contact => (
          <tr key={contact.id} className={styles.content}>
            <td className={styles.content}>{contact.name}</td>
            <td className={styles.content}>{contact.age}</td>
            <td className={styles.content}>{contact.phone}</td>
            <td className={styles.content}>{contact.dateofbirth}</td>
            <td className={styles.content}>{contact.addres}</td>
            <td className={styles.content}>{contact.email}</td>
            <td  className={styles.icons} data-contact={contact}>
              <div className="list-edit" data-contac={contact} >
              <AiOutlineEdit data-contac={contact} onClick={(contact) => onEdit(contact )}/>
              </div>
              <div className="list-delete">
                <RiDeleteBin6Line onClick={(contact) =>deleteContact(contact)}/>
              </div>
            </td>
          </tr>
        ))}
    </table>
  )
}

export { Table };