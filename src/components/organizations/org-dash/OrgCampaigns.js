import React from 'react'
import { Route, useParams } from 'react-router-dom';

import OrgCampaignsNav from './OrgCampaignsNav';
import OrgCampaignPage from './OrgCampaignPage';

import { OrgCampaignsStyled } from '../../../styling/dashboardStyled';

const OrgCampaigns = () => {
    const { id } = useParams();

    return (
        <OrgCampaignsStyled>
            <OrgCampaignsNav />

            <Route path={`/org-dashboard/:id/campaigns/:cid`} component={OrgCampaignPage} />
        </OrgCampaignsStyled>
    )
}

export default OrgCampaigns