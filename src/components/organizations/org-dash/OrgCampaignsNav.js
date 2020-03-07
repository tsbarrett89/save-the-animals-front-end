import React, {useState, useEffect} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

const OrgCampaignsNav = () => {
    const [campaigns, setCampaigns] = useState([])
    const {id} = useParams();

    useEffect (() => {
        axios.get(`https://save-the-animals-backend.herokuapp.com/api/campaigns/organizations/${id}`)
            .then(res => {
                setCampaigns(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {campaigns.map(campaign => {
               return (
                    <NavLink to=''>{campaign.campaign}</NavLink>
               )
            })}
        </div>
    )
}

export default OrgCampaignsNav