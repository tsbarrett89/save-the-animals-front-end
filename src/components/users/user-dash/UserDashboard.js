import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import UserDonations from './UserDonations';
import SavedCampaigns from './SavedCampaigns';

import { DashboardBody, DashboardNav } from '../../../styling/dashboardStyled';

const Dashboard = () => {
    
    return (
        <DashboardBody>
            <DashboardNav>
                <NavLink to='/user-dashboard/:id/saved-campaigns'>Saved Campaigns</NavLink>
                <NavLink to='/user-dashboard/:id/donations'>My Donations</NavLink>
            </DashboardNav>
            
            
            <Route path='/user-dashboard/:id/donations' component={UserDonations} />
            <Route path='/user-dashboard/:id/saved-campaigns' component={SavedCampaigns} />
        </DashboardBody>
    )
};

export default Dashboard