import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import SavedCampaignCard from './SavedCampaignCard';

const SavedCampaigns = () => {
    const { id } = useParams()
    const [savedCampaigns, setSavedCampaigns] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get(`https://save-the-animals-backend.herokuapp.com/api/users/saved-campaigns/${id}`)
            .then(res => {
                setSavedCampaigns(res.data)
                setLoading(!loading)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h3>My Saved Campaigns</h3>
            {loading && <p>Loading</p>}
            {savedCampaigns.length === 0 ? <p>Go save some campaigns (once we get that feature built).</p> :
            savedCampaigns.map(campaign => 
                <SavedCampaignCard
                    key={campaign.id}
                    campaign={campaign}
                />
            )}
        </div>
    )
}

export default SavedCampaigns