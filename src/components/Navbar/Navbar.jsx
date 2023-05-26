import React from 'react';

import { images } from '../../constants';
import './Navbar.scss';


const Navbar = () => {
    return (
        <div>
            <img src={images.logo} alt='logo' />
        </div>
    );
}

export default Navbar;