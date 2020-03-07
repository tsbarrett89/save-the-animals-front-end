import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import UserDonations from './UserDonations';
import SavedCampaigns from './SavedCampaigns';

const Dashboard = () => {
    
    return (
        <div>
            <NavLink to='/user-dashboard/:id/saved-campaigns'>Saved Campaigns</NavLink>
            <NavLink to='/user-dashboard/:id/donations'>My Donations</NavLink>
            
            <Route path='/user-dashboard/:id/donations' component={UserDonations} />
            <Route path='/user-dashboard/:id/saved-campaigns' component={SavedCampaigns} />
        </div>
    )
};

export default Dashboard