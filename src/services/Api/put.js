import React, { useState, useEffect} from 'react';
import axios from 'axios';



const put = (API,object) => {


    if(API){
        axios.put(API,object)
        .then(responsive => responsive)
        

    }

};

export { put };