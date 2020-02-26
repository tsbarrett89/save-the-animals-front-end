import React, {useState, useEffect} from 'react';
import axios from 'axios';

import FundingRecieved from './FundingRecieved';

import { CampaignPageStyled } from '../../styling/campaignsStyled';

const CampaignPage = props => {
    const id = props.match.params.id;
    const [campaignInfo, setCampaignInfo] = useState([]);

    useEffect(() => {
        axios.get(`https://save-the-animals-backend.herokuapp.com/api/campaigns/${id}`)
        .then(res => {
            setCampaignInfo(res.data)
        })
        .catch(err => console.log(err))
    }, [id])

    return (
        <CampaignPageStyled>
            <h2>{campaignInfo.campaign}</h2>
            <div className='cp-top'>
                <p>{campaignInfo.location}</p>
                <p>{campaignInfo.species}</p>
            </div>
            <div className='cp-mid'>
                <div className='cp-mid-left'>
                    <img src={campaignInfo.image} alt={campaignInfo.campaign} />
                    
                </div>
                <div className='cp-mid-right'>
                    <p>{campaignInfo.urgency_level}</p>
                    <p>Total Donations:</p>
                    <FundingRecieved id={id} funding={campaignInfo.funding_goal} />
                </div>
            </div>
            <div className='cp-bot'>
                <p>{campaignInfo.description}</p>
            </div>
        </CampaignPageStyled>
    )
}

export default CampaignPage