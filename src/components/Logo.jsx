import React from 'react';


const Logo = ({className}) =>{
    const urlLogo= 'https://images.squarespace-cdn.com/content/v1/60784c037df8cf1b1ccb72ed/6b6f246f-c47b-4fe7-8e54-06aa6b575c87/logoBRM_gris.png?format=1500w';
    return(
        <a href='https://www.brm.com.co/' className={className}>
            <img src={urlLogo} alt='Logo de BRM GRANDES ITERACCIONES'  className=''/>
        </a>
    )
}

export {Logo};