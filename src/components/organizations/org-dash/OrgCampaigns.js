import React from 'react'
import { Route } from 'react-router-dom';

import OrgCampaignsNav from './OrgCampaignsNav';
import OrgCampaignPage from './OrgCampaignPage';

import { OrgCampaignsStyled } from '../../../styling/dashboardStyled';

const OrgCampaigns = () => {

    return (
        <OrgCampaignsStyled>
            <OrgCampaignsNav />

            <Route path={`/org-dashboard/:id/campaigns/:cid`} component={OrgCampaignPage} />
        </OrgCampaignsStyled>
    )
}

export default OrgCampaigns