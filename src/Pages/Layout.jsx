import React from 'react';
import { ReactDOM } from 'react';

import { Header } from '../containers/Header';
import { Search } from '../components/Search';
import { Contact } from '../containers/Contact';
import { Button } from '../components/Button';
import { Appcontext } from '../context/Appcontext';
import { useContext } from 'react';
import ModalEdit from '../modal/ModalEdit';
import ModalAdd from '../modal/ModalAdd';



function Layout() {
  const  {modalEdit,modalAdd}=useContext(Appcontext);
  
  return (
      <div className="Layout">
        <Header/>
        <Search/>
        <Contact/>
        <Button/>
        {modalEdit && <ModalEdit/>}
        {modalAdd && <ModalAdd/>}
      </div>
  );
}

export { Layout };