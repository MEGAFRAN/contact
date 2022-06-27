import React, { useState } from 'react'
import {BsPerson} from 'react-icons/bs';
import {GoLocation} from 'react-icons/go';
import {AiOutlineMail} from 'react-icons/ai';
import {MdOutlineCall} from 'react-icons/md';
import { useContext } from 'react';
import { Appcontext } from '../context/Appcontext';
import styles from '../styles/components/Form.module.scss';

const Form = () => {
  const {addContact,setModalAdd}=useContext(Appcontext);
  const [forName, setFormName]= useState('');
  const [forPhone, setFormPhone]= useState('');
  const [formAge, setFormAge]= useState('');
  const [formDateBirth,setFormDateBirth]= useState('');
  const [formAddres,setFormAddres]= useState('');
  const [formEmail,setFormEmail]= useState('');
  const getAge = (dateBirth) => {
    setFormDateBirth(dateBirth);
    const currentDate = new Date();
    console.log(formDateBirth);
    const currentAge = parseInt(currentDate.getFullYear());
    const currentMonth = parseInt(currentDate.getMonth())+1;
    const currentDay = parseInt(currentDate.getDate());

    const birthYear = parseInt(String(dateBirth).substring(0,4));
    const birthMonth = parseInt(String(dateBirth).substring(5,7));
    const birthDay = parseInt(String(dateBirth).substring(8,10))-1;

    let presentAge = currentAge-birthYear;
    if (currentMonth<birthMonth){
      presentAge--;
    }else if (currentMonth === birthMonth){
      if(currentDay<birthDay){
        presentAge--;
      }
    }
    setFormAge(presentAge);
    console.log(formAge);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    const object = {
      email: formEmail,
      addres: formAddres,
      dateofbirth: formDateBirth,
      age: formAge,
      phone: forPhone,
      name: forName
    }
    addContact(object);
  }
  const handleClick = () => {
    setModalAdd(false);
  }

  return (
    
    <form className={styles.container} onSubmit={onSubmit} autoComplete="on">
      
      <h2>Crear contacto nuevo</h2>

      <label form='name'>
        <span><BsPerson/></span>
        <input name='name' id='name' required type="text" placeholder='Nombre completo'  onChange={event => setFormName(event.target.value)}/>
      </label>

      <label form='phone'>
        <span><MdOutlineCall/></span>
        <input name='phone' id='phone' required type="tel" placeholder='Telefono' onChange={event => setFormPhone(event.target.value)}/>
      </label>

      <label form='dateBirth'>
        <fieldset>
        <legend>Fecha de nacimiento</legend>
        <input name='dateBirth' id='dateBirth' required type="date"  onChange={event => getAge(event.target.value)}/>

        </fieldset>
      </label>

      <label form='addres'>
        <span><GoLocation/></span>
        <input name='addres' id='addres'  type="text" required placeholder='Direccion de residencia' onChange={event => setFormAddres(event.target.value)}/>
      </label>

      <label form='email'>
        <span><AiOutlineMail/></span>
        <input name='email' id='email'  type="email" required placeholder='Correo electronico' onChange={event => setFormEmail(event.target.value)} />
      </label>
      <div className="container-button">

        <button type="submit">Añadir</button>
        <button onClick={() => handleClick()}>Cancelar</button>
      </div>

    </form>
  
  )
}

export {Form}
