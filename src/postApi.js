import React, { useState, useEffect} from 'react';
import axios from 'axios';



const postApi = (API,object) => {


    if(API){
        axios.post(API,object)
        .then(responsive => responsive)
        

    }

};

export { postApi };