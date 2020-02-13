import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CredentialContext } from '../contexts/CredentialsContext';

const Header = () => {
    const { user } = useContext(CredentialContext)


    return (
        <div>
            <Link>{user.username.length ? 'Log Out': 'Log In'}</Link>
        </div>
    )
}

export default Header