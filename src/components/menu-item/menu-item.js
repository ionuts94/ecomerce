import React from 'react';
import './menu-item.css'

const MenuItem = ({ title, img, size }) => {
    console.log(title);
    console.log(img);
    return(
        <div className={`${size} menu-item`}>
            <div className="background-img" style={{'backgroundImage': `url('${img}')`}}>

            </div>
            <div className="content">
                <h1 className="title">{ title }</h1>
                <span className="subtitle">Shop now</span>
            </div>
        </div>
    );
}

export default MenuItem;