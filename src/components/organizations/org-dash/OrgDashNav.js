import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

import { DashboardNav } from '../../../styling/dashboardStyled';


const OrgDashNav = () => {
    const {id} = useParams();

    return (
        <DashboardNav>
            <NavLink to={`/org-dashboard/${id}/campaigns`}>Campaigns</NavLink>
            <NavLink to={`/org-dashboard/${id}/create-campaign`}>Create Campaign</NavLink>
        </DashboardNav>
    )
}

export default OrgDashNav