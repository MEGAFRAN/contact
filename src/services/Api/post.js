import React, { useState, useEffect} from 'react';
import axios from 'axios';



const post = (API,object) => {


    if(API){
        axios.post(API,object)
        .then(responsive => responsive)
        .catch(error => error)
        

    }

};

export { post };