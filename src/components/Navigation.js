import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import {UserCredentialContext} from '../contexts/UserCredentialContext';

import { NavStyled } from '../styling/navigationStyles.js';

const Navigation = () => {
    const {user} = useContext(UserCredentialContext)

    return (
        <NavStyled>
            <Link to='/'>Home</Link>
            <Link to='/dashboard'>{user.username.length ? user.username: 'Dashboard'}</Link>
            <Link to='/campaigns'>Campaigns</Link>
        </NavStyled>
    )
}

export default Navigation