// import React, { useContext } from 'react';
import { useState } from 'react';
// import { TodoContext } from '../TodoContext';

function Search() {
//   const {searchValue,setSearchValue} = useContext(TodoContext);
const [searchValue,setSearchValue]=useState('');
  const onSearchValueChange = (event) =>{
    console.log(event.target.value);
    setSearchValue(event.target.value)
  }
  return (
    <input 
    type='search'
    className="Search" 
    placeholder="Buscar contactos" 
    value={searchValue}
    onChange={onSearchValueChange}
    />
  );
}

export { Search };