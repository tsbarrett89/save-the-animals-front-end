import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { OrgCampaignPageStyled } from '../../../styling/dashboardStyled';

const OrgCampaignPage = () => {
    const { cid } = useParams();
    const [campaign, setCampaign] = useState({})

    useEffect(() => {
        axios.get(`https://save-the-animals-backend.herokuapp.com/api/campaigns/${cid}`)
            .then(res => {
                console.log(res.data)
                setCampaign(res.data)
            })
            .catch(err => console.log(err))
    }, [cid])

    return (
        <OrgCampaignPageStyled>
            <span className='campaign-left'>
                <h3>Campaign Name: {campaign.campaign}</h3>
                <p>Location: {campaign.location}</p>
                <p>Species: {campaign.species}</p>
                <p>Uregency level: {campaign.urgency_level}</p>
                <p>Deadline: {campaign.deadline}</p>
                <p>Description: {campaign.descritpion}</p>
                <p>Funding Goal: ${campaign.funding_goal}</p>
            </span>
            
            <span className='campaign-right'>Photo <img src={campaign.image} /></span>
        </OrgCampaignPageStyled>
    )
}

export default OrgCampaignPage