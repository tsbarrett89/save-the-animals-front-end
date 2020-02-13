import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CredentialContext } from '../contexts/CredentialsContext';

import menu from '../images/menu-icon.png';
import tortoise from '../images/tortoise.png';


const Header = () => {
    const { user } = useContext(CredentialContext)


    return (
        <div>
            <span className="header-left">
                <img src={tortoise} alt='logo' />
            </span>
            <span className="header-right">
                <Link to='/login'>{user.username.length ? 'Log Out': 'Log In'}</Link>
            <img src={menu} alt='menu' />
            </span>
            
        </div>
    )
}

export default Header