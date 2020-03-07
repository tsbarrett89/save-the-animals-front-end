import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import UserDonations from './UserDonations';
import SavedCampaigns from './SavedCampaigns';

import { DashboardNav } from '../../../styling/dashboardStyled';

const Dashboard = () => {
    
    return (
        <DashboardNav>
            <nav>
                <NavLink to='/user-dashboard/:id/saved-campaigns'>Saved Campaigns</NavLink>
                <NavLink to='/user-dashboard/:id/donations'>My Donations</NavLink>
            </nav>
            
            
            <Route path='/user-dashboard/:id/donations' component={UserDonations} />
            <Route path='/user-dashboard/:id/saved-campaigns' component={SavedCampaigns} />
        </DashboardNav>
    )
};

export default Dashboard