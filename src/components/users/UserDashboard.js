import React, { useContext } from 'react';

import { UserCredentialContext } from '../../contexts/UserCredentialsContext';


const Dashboard = () => {
    const { user } = useContext(UserCredentialContext)


    return (
        <div>
            <h3>Welcome {user.username}</h3>
        </div>
    )
};

export default Dashboard