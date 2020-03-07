import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import {UserCredentialContext} from '../contexts/UserCredentialContext';
import {OrgCredentialContext} from '../contexts/OrgCredentialContext';

import { NavStyled } from '../styling/navigationStyles.js';

const Navigation = () => {
    const {user} = useContext(UserCredentialContext)
    const {org} = useContext(OrgCredentialContext)

    return (
        <NavStyled>
            <Link to='/'>Home</Link>
            {org.org_name.length > 0 && <Link to={`/org-dashboard/${org.org_id}`}>{org.org_name}</Link>}
            {user.username.length > 0 && <Link to={`/user-dashboard/${user.id}`}>{user.username}</Link>}
            <Link to='/campaigns'>Campaigns</Link>
        </NavStyled>
    )
}

export default Navigation