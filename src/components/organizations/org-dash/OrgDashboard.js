import React from 'react';
import { Route } from 'react-router-dom';

import OrgDashNav from './OrgDashNav'
import CreateNewCampaign from '../CreateNewCampaign';
import OrgCampaigns from './OrgCampaigns';



const OrgDashboard = () => {

    return (
        <div>
            <OrgDashNav />

            <Route path='/org-dashboard/:id/campaigns' component={OrgCampaigns} />
            <Route path='/org-dashboard/:id/create-campaign' component={CreateNewCampaign} />
        </div>
    )
}

export default OrgDashboard