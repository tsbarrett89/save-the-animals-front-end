import React from 'react';

import { CampaignCardStyled } from '../../styling/campaignsStyled';


const CampaignCard = props => {
    

    return (
        <CampaignCardStyled>
            <div className='card-left'>
                { props.campaign.image ? <img src={props.campaign.image} alt={props.campaign.campaign} /> : <p></p> }
            </div>
            <div className='card-right'>
                <h3>{props.campaign.campaign}</h3>
                <p>Location: {props.campaign.location}</p>
                <p>Species: {props.campaign.species}</p>
                <p>Urgency: {props.campaign.urgency_level}</p>
                <p>{props.campaign.description}</p>
                <p>Goal ${props.campaign.funding_goal}</p>
                <p>{props.campaign.deadline}</p>
            </div>
            
            
        </CampaignCardStyled>
    )
}


export default CampaignCard