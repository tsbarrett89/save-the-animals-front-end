import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CampaignCard from './CampaignCard'

import { CampaignListStyled } from '../../styling/campaignsStyled';

const CampaignList = () => {
    const [campaigns, setCampaigns] = useState([])

    useEffect(() => {
        axios
            .get(`https://save-the-animals-backend.herokuapp.com/api/campaigns`)
            .then(res => {
                setCampaigns(res.data)
            })
    }, [])


    return (
        <CampaignListStyled>
            <h2>Campaigns</h2>
            {campaigns.map(campaign => (
                <CampaignCard 
                    key={campaign.id}
                    campaign={campaign}
                />
            ))}
        </CampaignListStyled>
    )
}

export default CampaignList
