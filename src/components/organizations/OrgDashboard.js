import React, {useContext} from 'react';

import { OrgCredentialContext } from '../../contexts/OrgCredentialContext'

const OrgDashboard = () => {
    const {org} = useContext(OrgCredentialContext)

    return (
        <div>
            <h2>Org Dashboard</h2>
            <p>{org.org_name}</p>
        </div>
    )
}

export default OrgDashboard