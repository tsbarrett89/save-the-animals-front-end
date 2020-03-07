import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { DonationCardStyled } from '../../styling/dashboardStyled';


const DonationCard = props => {
    const [campaignName, setCampaignName] = useState('')

    useEffect(() => {
        axios.get(`https://save-the-animals-backend.herokuapp.com/api/campaigns/${props.donation.campaign_id}`)
            .then(res => {
                console.log(res.data)
                setCampaignName(res.data.campaign)
            })
            .catch(err => console.log(err))
    })

    return (
        <DonationCardStyled>
            <p>{campaignName}</p>
            <p>{props.donation.donation_amount}</p>
            <Link to={`/campaign/${props.donation.campaign_id}`}>View Campaign</Link>
        </DonationCardStyled>
    )
}

export default DonationCard