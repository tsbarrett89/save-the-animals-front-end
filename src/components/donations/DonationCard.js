import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { DonationCardStyled } from '../../styling/dashboardStyled';


const DonationCard = props => {
    const [campaignName, setCampaignName] = useState('')

    useEffect(() => {
        axios.get(`https://save-the-animals-backend.herokuapp.com/api/campaigns/${props.donation.campaign_id}`)
            .then(res => {
                setCampaignName(res.data.campaign)
            })
            .catch(err => console.log(err.response))
    })

    return (
        <DonationCardStyled>
            <p>{campaignName}</p>
            <p>${props.donation.donation_amount}</p>
            <p><Link to={`/campaign/${props.donation.campaign_id}`}>View Campaign</Link></p>
        </DonationCardStyled>
    )
}

export default DonationCard