
import React from 'react';
import  ReactDOM  from 'react-dom';
import { Edit } from '../components/Edit';

const ModalEdit = ({children}) => {
  return ReactDOM.createPortal(
    <div className="container-edit">
      <Edit/>
    </div>,
    document.getElementById('modalEdit')
  )
}

export default ModalEdit