import React, {useState, useEffect} from 'react';
import axios from 'axios';

import FundingRecieved from './FundingRecieved';
import Donate from '../Donate';
import SaveButton from './SaveCampaignButton';


import { CampaignPageStyled } from '../../styling/campaignsStyled';

const CampaignPage = props => {
    const id = props.match.params.cid;
    const [campaignInfo, setCampaignInfo] = useState([]);
    const [totalDonations, setTotalDonations] = useState('');
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        axios.get(`https://save-the-animals-backend.herokuapp.com/api/campaigns/${id}`)
        .then(res => {
            setCampaignInfo(res.data)
        })
        .catch(err => console.log(err.response))

        axios.get(`https://save-the-animals-backend.herokuapp.com/api/donations/campaigns/${id}`)
            .then(res => setTotalDonations(res.data.length))
            .catch(err => console.log(err.response))
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
                    <p className='urgency' className={campaignInfo.urgency_level}>{campaignInfo.urgency_level}</p>
                    <p>{totalDonations} total donations</p>
                    <FundingRecieved id={id} funding={campaignInfo.funding_goal} />
                    <SaveButton campaign_id={id} />
                    {toggle ? <Donate campaign_id={id} /> : <button className='donateButton' onClick={toggleDonate}>Donate Now</button>}
                </div>
            </div>
            <div className='cp-bot'>
                
                <p>{campaignInfo.description}</p>
            </div>
        </CampaignPageStyled>
    )
}

export default CampaignPage