
import React from 'react';
import  ReactDOM  from 'react-dom';
import { Form } from '../components/Form';
import styles from '../styles/modals/ModalAdd.module.scss';

const ModalAdd = ({children}) => {
  return ReactDOM.createPortal(
    <div className={styles.container}>
      <Form/>
    </div>,
    document.getElementById('modalAdd')
  )
}

export default ModalAdd