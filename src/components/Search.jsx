import React, { useContext } from 'react';
import { Appcontext } from '../context/Appcontext';
import styles from '../styles/components/Search.module.scss';

function Search() {
const {searchValue,setSearchValue} = useContext(Appcontext);
const onSearchValueChange = (event) =>{
    console.log(event.target.value);
    setSearchValue(event.target.value)
}

  return (
    <div className={styles.container}>
      <input 
      type='search'
      className='' 
      placeholder="Buscar contactos" 
      value={searchValue}
      onChange={onSearchValueChange}
      />
      
    </div>
  );
}

export { Search };