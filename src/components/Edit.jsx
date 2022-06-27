import React, { useState } from 'react'
import {BsPerson} from 'react-icons/bs';
import {GoLocation} from 'react-icons/go';
import {AiOutlineMail} from 'react-icons/ai';
import {MdOutlineCall} from 'react-icons/md';
import { useContext } from 'react';
import { Appcontext } from '../context/Appcontext';
import styles from '../styles/components/Edit.module.scss';

const Edit = () => {
  const {formEdit,editContact,setModalEdit}=useContext(Appcontext);
  const [forName, setFormName]= useState(formEdit.name);
  const [forPhone, setFormPhone]= useState(formEdit.phone);
  const [formAge, setFormAge]= useState(formEdit.age);
  const [formDateBirth,setFormDateBirth]= useState(formEdit.dateBirth);
  const [formAddres,setFormAddres]= useState(formEdit.addres);
  const [formEmail,setFormEmail]= useState(formEdit.email);
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
    editContact(formEdit,object);
  }
  const handleClick = () => {
    setModalEdit(false);
  }

  return (
    
    <form className={styles.container}onSubmit={onSubmit} autoComplete="on">

      <h2>Editar contacto</h2>

      <label form='name'>
        <span><BsPerson/></span>
        <input name='name' id='name' value={forName} required type="text"  onChange={event => setFormName(event.target.value)}/>
      </label>

      <label form='phone'>
        <span><MdOutlineCall/></span>
        <input name='phone' id='phone' value={forPhone} required type="tel"  onChange={event => setFormPhone(event.target.value)}/>
      </label>

      <label form='dateBirth'>
        <fieldset>
          <legend>Fecha de nacimiento</legend>
          <input name='dateBirth' id='dateBirth' value={formDateBirth} required type="date"  onChange={event => getAge(event.target.value)}/>
        </fieldset>
      </label>

      <label form='addres'>
        <span><GoLocation/></span>
        <input name='addres' id='addres' value={formAddres}  type="text" required placeholder='Direccion de residencia' onChange={event => setFormAddres(event.target.value)}/>
      </label>

      <label form='email'>
        <span><AiOutlineMail/></span>
        <input name='email' id='email' value={formEmail}  type="email" required placeholder='Correo electronico' onChange={event => setFormEmail(event.target.value)} />
      </label>

      <div className="container-button">

        <button type="submit">Editar</button>
        <button onClick={() => handleClick()}>Cancelar</button>
      </div>

    </form>
  
  )
}

export {Edit}
