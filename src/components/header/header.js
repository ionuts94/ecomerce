import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { ReactComponent as CrownLogo } from './crown.svg'

const Header = () => {

    return(
        <div className="header-component">
            <Link className="logo-container" to='/'>
                <CrownLogo />
            </Link>
            <div className="navigation">

                <Link className='link' to="/shop">
                    <span className="nav-links">SHOP</span>
                </Link>

                <Link className='link' to="/contact">
                    <span className="nav-links">CONTACT</span>
                </Link>
                
            </div>
        </div>
    )
}

export default Header;