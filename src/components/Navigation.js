import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import {CredentialContext} from '../contexts/CredentialsContext';

import { NavStyled } from '../styling/navigationStyles.js';

const Navigation = () => {
    const {user} = useContext(CredentialContext)

    return (
        <NavStyled>
            <Link to='/'>Home</Link>
            <Link to='/dashboard'>{user.username.length ? user.username: 'Dashboard'}</Link>
            <Link to='/campaigns'>Campaigns</Link>
        </NavStyled>
    )
}

export default Navigation