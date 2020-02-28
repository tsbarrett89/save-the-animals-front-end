import React, {useState, useEffect} from 'react';
import axios from 'axios';

import FundingRecieved from './FundingRecieved';
import Donate from '../Donate';

import { CampaignPageStyled } from '../../styling/campaignsStyled';

const CampaignPage = props => {
    const id = props.match.params.id;
    const [campaignInfo, setCampaignInfo] = useState([]);
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        axios.get(`https://save-the-animals-backend.herokuapp.com/api/campaigns/${id}`)
        .then(res => {
            console.log(res.data)
            setCampaignInfo(res.data)
        })
        .catch(err => console.log(err))
    }, [id])

    const toggleDonate = () => {
        setToggle(!toggle)
    }

    return (
        <CampaignPageStyled>
            <h2>{campaignInfo.campaign}</h2>
            <div className='cp-top'>
                <h4>{campaignInfo.species}</h4>
                <h4>{campaignInfo.location}</h4>
            </div>
            <div className='cp-mid'>
                <div className='cp-mid-left'>
                    <img src={campaignInfo.image} alt={campaignInfo.campaign} />
                    
                </div>
                <div className='cp-mid-right'>
                    <p>{campaignInfo.urgency_level}</p>
                    <p>total donations</p>
                    <FundingRecieved id={id} funding={campaignInfo.funding_goal} />
                    <button onClick={toggleDonate}>Donate Now</button>
                    {toggle ? <Donate campaign_id={id} /> : <div></div>}
                </div>
            </div>
            <div className='cp-bot'>
                
                <p>{campaignInfo.description}</p>
            </div>
        </CampaignPageStyled>
    )
}

export default CampaignPage