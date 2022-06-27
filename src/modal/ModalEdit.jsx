
import React from 'react';
import  ReactDOM  from 'react-dom';
import { Edit } from '../components/Edit';
import styles from '../styles/modals/ModalEdit.module.scss';

const ModalEdit = ({children}) => {
  return ReactDOM.createPortal(
    <div className={styles.container}>
      <Edit/>
    </div>,
    document.getElementById('modalEdit')
  )
}

export default ModalEdit;