import React, {useState} from 'react';

import Donate from '../Donate';
import FundingRecieved from './FundingRecieved.js';

import { CampaignCardStyled } from '../../styling/campaignsStyled';


const CampaignCard = props => {
    const [donateToggle, setDonateToggle] = useState(false)

    const toggleDonate = () => {
        setDonateToggle(!donateToggle)
    }

    return (
        <CampaignCardStyled>
            <div className='top'>
                <div className='top-left'>
                    { props.campaign.image ? <img src={props.campaign.image} alt={props.campaign.campaign} /> : <p></p> }
                </div>
                <div className='top-right'>
                    <h3>{props.campaign.campaign}</h3>
                    <p>Location: {props.campaign.location}</p>
                    <p>Species: {props.campaign.species}</p>
                    <p>Urgency: {props.campaign.urgency_level}</p>
                </div>
            </div>
            <div className='mid'>
                <p>{props.campaign.description}</p>
            </div>
            <div className='bot'>
                <FundingRecieved id={props.campaign.id} funding={props.campaign.funding_goal} />
                <p>{props.campaign.deadline}</p>
            </div>
            <button onClick={toggleDonate}>Donate</button>
            {donateToggle ? <Donate /> : <div></div>}
        </CampaignCardStyled>
    )
}


export default CampaignCard