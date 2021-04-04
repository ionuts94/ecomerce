import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.css'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    
    return(
        <div className={`${size} menu-item`}>
            <div className="background-img" style={{'backgroundImage': `url('${imageUrl}')`}}>

            </div>
            <div className="content" 
                onClick={() => {
                    history.push(`${match.url}${linkUrl}`);
                }}>
                <h1 className="title">{ title }</h1>
                <span className="subtitle">Shop now</span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);