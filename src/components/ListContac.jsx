import React from 'react';
import {AiOutlineEdit} from 'react-icons/ai';
import {RiDeleteBin6Line} from 'react-icons/ri';

function ListContact({name,age,phone,dateofbirth,addres,email,onEdit,onDelete}) {
  
  return (
    <li>
        <div className="list-name">
            {name}
        </div>
        <div className="list-age">
            {age}
        </div>
        <div className="list-phone">
            {phone}
        </div>
        <div className="list-dateofbirth">
            {dateofbirth}
        </div>
        <div className="list-addres">
            {addres}
        </div>
        <div className="list-email">
            {email}
        </div>
        <div className="lis-icon">
          <div className="list-edit">
            <AiOutlineEdit onClick={onEdit}/>
          </div>
          <div className="list-delete">
            <RiDeleteBin6Line onClick={onDelete}/>
          </div>
        </div>

        
    </li>
  );
}

export { ListContact };
