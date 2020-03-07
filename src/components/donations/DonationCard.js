import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



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
        <div>
            <p>{campaignName}</p>
            <p>{props.donation.donation_amount}</p>
            <Link to={`/campaign/${props.donation.campaign_id}`}>View Campaign</Link>
        </div>
    )
}

export default DonationCard