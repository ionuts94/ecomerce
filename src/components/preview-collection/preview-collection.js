import React, { Component } from 'react';
import CollectionItems from '../collection-items/collection-items.js'
import './preview-collection.css';

const PreviewCollection = (props) => {

    return(
        <div className="preview-container">
            <h1>{ props.title }</h1>
            <div className='preview'>
                {
                    props.items.map(item => {
                        return (
                            <CollectionItems key={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default PreviewCollection;