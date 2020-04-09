import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import CampaignCard from '../../campaigns/CampaignCard';

const SavedCampaigns = () => {
    const { id } = useParams()
    const [savedCampaigns, setSavedCampaigns] = useState([])

    useEffect(() => {
        axios
            .get(`https://save-the-animals-backend.herokuapp.com/api/users/saved-campaigns/${id}`)
            .then(res => {
                setSavedCampaigns(res.data)
            })
            .catch(err => console.log(err))
    })

    return (
        <div>
            <p>Go save some campaigns (once we get that feature built).</p>
            {savedCampaigns.map(campaign => 
                <CampaignCard
                    key={campaign.id}
                    campaign={campaign}
                />
            )}
        </div>
    )
}

export default SavedCampaigns