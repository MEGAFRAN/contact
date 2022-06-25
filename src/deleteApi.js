import React, { useState, useEffect} from 'react';
import axios from 'axios';



const deleteApi = (API) => {


    if(API){
        axios.delete(API)
        .then(responsive => responsive)
        

    }

};

export { deleteApi };