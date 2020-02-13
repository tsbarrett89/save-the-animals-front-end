import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CampaignCard from './CampaignCard'

const CampaignList = () => {
    const [campaigns, setCampaigns] = useState([])

    useEffect(() => {
        axios
            .get(`https://save-the-animals-backend.herokuapp.com/api/campaigns`)
            .then(res => {
                console.log(res.data);
                setCampaigns(res.data)
            })
    }, [])


    return (
        <div>
            {campaigns.map(campaign => (
                <CampaignCard 
                    key={campaign.id}
                    campaign={campaign}
                />
            ))}
        </div>
    )
}

export default CampaignList
