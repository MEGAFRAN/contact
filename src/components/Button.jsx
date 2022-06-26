import React from 'react';
import { useContext } from 'react';
import {AiOutlineUserAdd} from 'react-icons/ai';
import { Appcontext } from '../context/Appcontext';

const Button = () => {
  const{setModalAdd}=useContext(Appcontext);
  const handleClick = () => {
    setModalAdd(true);
  }
  return (
    <button className="container-button" onClick={() => handleClick()}>
        <AiOutlineUserAdd/>
        <span>Añadir</span>
    </button>
  )
}

export { Button };