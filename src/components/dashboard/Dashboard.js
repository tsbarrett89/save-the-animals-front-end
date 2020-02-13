import React, { useContext } from 'react';

import { CredentialContext } from '../../contexts/CredentialsContext';


const Dashboard = () => {
    const { user } = useContext(CredentialContext)


    return (
        <div>
            <h3>Welcome {user.username}</h3>
        </div>
    )
};

export default Dashboard