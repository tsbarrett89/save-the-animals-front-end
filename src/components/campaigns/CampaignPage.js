import React, {useState, useEffect} from 'react';
import axios from 'axios';

import FundingRecieved from './FundingRecieved';

const CampaignPage = props => {
    const id = props.match.params.id;
    const [campaignInfo, setCampaignInfo] = useState([]);

    useEffect(() => {
        axios.get(`https://save-the-animals-backend.herokuapp.com/api/campaigns/${id}`)
        .then(res => {
            setCampaignInfo(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h2>{campaignInfo.campaign}</h2>
            <p>{campaignInfo.location}</p>
            <p>{campaignInfo.species}</p>
            <p>{campaignInfo.urgency_level}</p>
            <p>{campaignInfo.description}</p>
            <img src={campaignInfo.image} alt={campaignInfo.campaign} />
            <FundingRecieved id={id} funding={campaignInfo.funding_goal} />
        </div>
    )
}

export default CampaignPage