import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { UserCredentialContext } from '../contexts/UserCredentialContext';
import { OrgCredentialContext } from '../contexts/OrgCredentialContext';

import menu from '../images/menu-icon.png';
import tortoise from '../images/tortoise.png';
import Navigation from './Navigation.js';

import { HeaderStyled } from '../styling/headerStyles.js';


const Header = () => {
    const { user, estUser } = useContext(UserCredentialContext)
    const { org, estOrg } = useContext(OrgCredentialContext)
    const [dropdownOpen, setOpen] = useState(false);
    const clearUser = {
        username: '',
        user_id: null
    }
    const clearOrg = {
        org_name: '',
        org_id: null
    }

    const toggle = () => setOpen(!dropdownOpen);

    const logOut = () => {
        estUser(clearUser);
        estOrg(clearOrg)
        localStorage.clear();
    }

    return (
        <HeaderStyled>
            <span className="header-left">
                <Link to='/'><img src={tortoise} alt='logo' /></Link>
                <h1>Save the Animals</h1>
            </span>
            <span className="header-right">
                <Link to='/login' className='login' onClick={logOut}>{user.username || org.org_name ? 'Log Out': 'Log In'}</Link>
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