import React from 'react';
import { Link } from 'react-router-dom';

import FundingRecieved from './FundingRecieved.js';

import { CampaignCardStyled } from '../../styling/campaignsStyled';


const CampaignCard = props => {
    
    return (
        <CampaignCardStyled>
            <div className='top'>
                <div className='top-left'>
                    { props.campaign.image ? <img src={props.campaign.image} alt={props.campaign.campaign} /> : <p></p> }
                </div>
                <div className='top-right'>
                    <span>
                        <h3>{props.campaign.campaign}</h3>
                    </span>
                    <p>Location: {props.campaign.location}</p>
                    <p>Species: {props.campaign.species}</p>
                    <p>Urgency: {props.campaign.urgency_level}</p>
                    <Link to={`/campaign/${props.campaign.id}`}><button>Donate</button></Link>
                </div>
            </div>
            <div className='mid'>
                <p>{props.campaign.description}</p>
            </div>
            <div className='bot'>
                <FundingRecieved id={props.campaign.id} funding={props.campaign.funding_goal} />
                <p>{props.campaign.deadline}</p>
            </div>
            
        </CampaignCardStyled>
    )
}


export default CampaignCard