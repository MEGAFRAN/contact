
import React from 'react';
import  ReactDOM  from 'react-dom';
import { Form } from '../components/Form';

const ModalAdd = ({children}) => {
  return ReactDOM.createPortal(
    <div className="container-add">
      <Form/>
    </div>,
    document.getElementById('modalAdd')
  )
}

export default ModalAdd