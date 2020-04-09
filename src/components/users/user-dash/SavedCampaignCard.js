import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SavedCampaignCard = props => {
    const [campaignDetails, setCampaignDetails] = useState({})

    useEffect(() => {
        axios
            .get(`https://save-the-animals-backend.herokuapp.com/api/campaigns/${props.campaign.campaign_id}`)
            .then(res => setCampaignDetails(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>{campaignDetails.campaign}</div>
    )
}

export default SavedCampaignCard