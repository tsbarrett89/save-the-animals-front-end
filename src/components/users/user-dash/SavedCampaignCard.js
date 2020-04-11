import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SavedCampaignCard = props => {
    const [campaignDetails, setCampaignDetails] = useState({})

    useEffect(() => {
        axios
            .get(`https://save-the-animals-backend.herokuapp.com/api/campaigns/${props.campaign.campaign_id}`)
            .then(res => setCampaignDetails(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <p>{campaignDetails.campaign}</p>
            <Link to={`/campaign/${props.campaign.campaign_id}`}>details</Link>
        </div>
    )
}

export default SavedCampaignCard