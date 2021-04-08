import React from 'react';
import PreviewCollection from '../../components/preview-collection/preview-collection.js';

import shopData from './shopcollection.js';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            collection: shopData
        }
    }

    render() {
        const { collection } = this.state;
       
        return(
            <div>
                {
                    collection.map(item => {
                        return <PreviewCollection key={item.id} title={item.title} items={item.items} />
                    })
                }
            </div>
        );
    }
}

export default ShopPage;