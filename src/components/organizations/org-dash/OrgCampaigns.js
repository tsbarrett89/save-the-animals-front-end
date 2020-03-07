import React from 'react'
import { Route } from 'react-router-dom';

import OrgCampaignsNav from './OrgCampaignsNav';

const OrgCampaigns = () => {

    return (
        <div>
            <OrgCampaignsNav />

            <Route path='/org-dashboard/:id/campaigns/:c-id' />
        </div>
    )
}

export default OrgCampaigns