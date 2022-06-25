import React from 'react';


function ListTitle({name,age,phone,dateofbirth,addres,email,actions}) {
  
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
            {actions}
          </div>
        </div>

        
    </li>
  );
}

export { ListTitle };