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
            <div className="addToCart">
                <h1 className="addToCartH1">Add to cart</h1>
            </div>
        </div>
    )
}

export default CollectionItems;