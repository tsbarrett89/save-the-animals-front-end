import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { CredentialContext } from '../contexts/CredentialsContext';

import menu from '../images/menu-icon.png';
import tortoise from '../images/tortoise.png';
import Navigation from './Navigation.js';
import { HeaderStyled } from '../styling/headerStyles.js';


const Header = () => {
    const { user } = useContext(CredentialContext)
    const [dropdownOpen, setOpen] = useState(false);


    const toggle = () => setOpen(!dropdownOpen);

    return (
        <HeaderStyled>
            <span className="header-left">
                <img src={tortoise} alt='logo' />
            </span>
            <span className="header-right">
                <Link to='/login' className='login'>{user.username.length ? 'Log Out': 'Log In'}</Link>
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