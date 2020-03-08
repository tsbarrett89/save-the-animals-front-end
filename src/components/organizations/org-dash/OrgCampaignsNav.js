import React, {useState, useEffect} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

import { OrgDashNavStyled } from '../../../styling/dashboardStyled';

const OrgCampaignsNav = () => {
    const [campaigns, setCampaigns] = useState([])
    const {id} = useParams();

    useEffect (() => {
        axios.get(`https://save-the-animals-backend.herokuapp.com/api/campaigns/organizations/${id}`)
            .then(res => {
                setCampaigns(res.data)
            })
            .catch(err => console.log(err))
    }, [campaigns])

    return (
        <OrgDashNavStyled >
            {campaigns.map(campaign => {
               return (
                    <NavLink to={`/org-dashboard/${id}/campaigns/${campaign.id}`} key={campaign.id}>{campaign.campaign}</NavLink>
               )
            })}
        </OrgDashNavStyled>
    )
}

export default OrgCampaignsNav