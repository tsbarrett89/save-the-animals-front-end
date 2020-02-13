import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import {CredentialContext} from '../contexts/CredentialsContext';

const Navigation = () => {
    const {user} = useContext(CredentialContext)

    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/dashboard'>{user.username.length ? user.username: 'Dashboard'}</Link>
            <Link to='/campaigns'>Campaigns</Link>
        </nav>
    )
}

export default Navigation