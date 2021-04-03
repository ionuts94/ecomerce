import React from 'react';
import MenuItem from '../menu-item/menu-item.js';
import './directory.css';

class Directory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sections : [
                {
                    title: 'HATS',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'JACKETS',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'SNEAKERS',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'WOMEN',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'MEN',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }
    }
    
    render() {
        return(
            <div className="directory-menu">
                 {
                    this.state.sections.map(elem => {
                        return <MenuItem key={elem.id} title={elem.title} img={elem.imageUrl} size={elem.size} />
                    })
                 }
            </div>
        )
    }

}

export default Directory;