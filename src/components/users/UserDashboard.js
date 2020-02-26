import React, { useContext } from 'react';

import { UserCredentialContext } from '../../contexts/UserCredentialContext';


const Dashboard = () => {
    const { user } = useContext(UserCredentialContext)


    return (
        <div>
            <h3>{user.username}</h3>
        </div>
    )
};

export default Dashboard