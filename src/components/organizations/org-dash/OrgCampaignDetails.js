import React from 'react';

import {OrgCampaignDetailsStyled} from '../../../styling/dashboardStyled';

const OrgCampaignDetails = props => {

    return (
        <OrgCampaignDetailsStyled>
                <span className='campaign-left'>
                    <h3>Campaign Name: {props.campaign.campaign}</h3>
                    <p>Location: {props.campaign.location}</p>
                    <p>Species: {props.campaign.species}</p>
                    <p>Uregency level: {props.campaign.urgency_level}</p>
                    <p>Deadline: {props.campaign.deadline}</p>
                    <p>Description: {props.campaign.description}</p>
                    <p>Funding Goal: ${props.campaign.funding_goal}</p>
                </span>
                <span className='campaign-right'>Photo <img src={props.campaign.image} alt={props.campaign.name} /></span>
            </OrgCampaignDetailsStyled>
    )
}

export default OrgCampaignDetails