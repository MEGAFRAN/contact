import React, { useState, useEffect} from 'react';
import axios from 'axios';



const useGet = (API) => {
    const [characters, setCharacters]= useState([]);
    const [loading, setLoading]= useState(false);
    const [error, setError]= useState('')

    useEffect(() => {
        setError('');
        if(API){
            axios.get(API)
            .then(responsive => setCharacters(responsive.data))
            .catch(error => {setError(error); setLoading(false)});
        }
    

    },[characters]);
    return {characters,error,setError,setLoading,loading};
};

export { useGet };