import React from 'react';
import { useContext } from 'react';
import {AiOutlineUserAdd} from 'react-icons/ai';
import { Appcontext } from '../context/Appcontext';
import styles from '../styles/components/Button.module.scss';

const Button = () => {
  const{setModalAdd}=useContext(Appcontext);
  const handleClick = () => {
    setModalAdd(true);
  }
  return (
    <button className={styles.container} onClick={() => handleClick()}>
        <AiOutlineUserAdd/>
        <span>Añadir</span>
    </button>
  )
}

export { Button };