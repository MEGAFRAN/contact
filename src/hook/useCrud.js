import React, { useState, useEffect} from 'react';
import { useGet } from './useGet';
import { post } from '../services/Api/post';
import { deleteApi } from '../services/Api/deleteApi';
import { put } from '../services/Api/put';



const useCrud = () => {
  const API = 'http://localhost:4000/products';
  const{characters,error,setError,setLoading,loading} = useGet(API);
  const[searchValue,setSearchValue]= useState('');
  const[modalEdit,setModalEdit]= useState(false);
  const[modalAdd,setModalAdd]= useState(false);
  const[formEdit, setFormEdit]= useState({});
  let searchContact = [];
    if(!searchValue>=1){
      searchContact= characters;
    }else{
      searchContact = characters.filter(contact => {
        const contactName = contact.name.toLowerCase();
        const contactPhone = contact.phone;
        const contactEmail = contact.email.toLocaleLowerCase();
        const search = searchValue.toLocaleLowerCase();
        return contactName.includes(search) || contactPhone.includes(search) || contactEmail.includes(search) ;
      })
    }
  const addContact = (object) => {
    setLoading(true);
    const ApiPost = 'http://localhost:4000/products';
    post(ApiPost,object);
    setModalAdd(false);
  }
  const editContact = (contact,object) => {
    setLoading(true);
    const APIPut = `http://localhost:4000/products/${contact.id}`
    put(APIPut,object);
  }
  const deleteContact = (contact) => {
    setLoading(true);
    const APIDelete = `http://localhost:4000/products/${contact.id}`
    deleteApi(APIDelete);
  }

  return {
    characters,
    error,
    setLoading,
    loading,
    addContact,
    deleteContact,
    searchValue,
    setSearchValue,
    searchContact,
    modalEdit,
    formEdit,
    setFormEdit,
    setModalEdit,
    modalAdd,
    setModalAdd
  };
};

export { useCrud };