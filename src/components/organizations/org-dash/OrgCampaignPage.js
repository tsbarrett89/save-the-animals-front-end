import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OrgCampaignPage = () => {
    const { cid } = useParams();
    const [campaign, setCampaign] = useState({})

    useEffect(() => {
        axios.get(`https://save-the-animals-backend.herokuapp.com/api/campaigns/${cid}`)
            .then(res => {
                setCampaign(res.data)
            })
            .catch(err => console.log(err))
    }, [campaign])

    return (
        <div>
            <h3>{campaign.campaign}</h3>
        </div>
    )
}

export default OrgCampaignPage