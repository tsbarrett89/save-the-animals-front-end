import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import {CredentialContext} from '../contexts/CredentialsContext';

const Navigation = () => {
    const {user} = useContext(CredentialContext)

    return (
        <nav>
            <Link>Home</Link>
            <Link>{user.username.length ? user.username: 'Dashboard'}</Link>
            <Link>Campaigns</Link>
        </nav>
    )
}

export default Navigation