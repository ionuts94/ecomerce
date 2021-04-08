import React from 'react';
import './collection-items.css';

const CollectionItems = ({ id, name, imageUrl, price}) => {
    return(
        <div className="collection-items">
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}}></div>
            <div className="collection-footer">
                <span className="itemName">{ name }</span>
                <span className="itemPrice">£{ price }</span>
            </div>
        </div>
    )
}

export default CollectionItems;