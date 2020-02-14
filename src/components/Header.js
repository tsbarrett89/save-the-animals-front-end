import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { CredentialContext } from '../contexts/CredentialsContext';

import menu from '../images/menu-icon.png';
import tortoise from '../images/tortoise.png';
import Navigation from './Navigation.js';
import { HeaderStyled } from '../styling/headerStyles.js';


const Header = () => {
    const { user, estUser } = useContext(CredentialContext)
    const [dropdownOpen, setOpen] = useState(false);
    const clearUser = {
        username: '',
        user_id: null
    }

    const toggle = () => setOpen(!dropdownOpen);

    const logOut = e => {
        estUser(clearUser);
        localStorage.clear();
    }

    return (
        <HeaderStyled>
            <span className="header-left">
                <Link to='/'><img src={tortoise} alt='logo' /></Link>
            </span>
            <span className="header-right">
                <Link to='/login' className='login' onClick={logOut}>{user.username ? 'Log Out': 'Log In'}</Link>
                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>
                        <img src={menu} alt='menu' />
                    </DropdownToggle>
                    <DropdownMenu className='dropdown-menu-right'>
                        <DropdownItem>
                            <Navigation />
                        </DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </span>
            
        </HeaderStyled>
    )
}

export default Header