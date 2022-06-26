import React, { useState, useEffect} from 'react';
import axios from 'axios';



const putApi = (API,object) => {


    if(API){
        axios.patch(API,object)
        .then(responsive => responsive)
        

    }

};

export { putApi };