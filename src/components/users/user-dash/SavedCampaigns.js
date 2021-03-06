import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import SavedCampaignCard from './SavedCampaignCard';

import { SavedCampaignsStyled } from '../../../styling/savedCampaignsStyles'

const SavedCampaigns = () => {
    const { id } = useParams()
    const [savedCampaigns, setSavedCampaigns] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get(`https://save-the-animals-backend.herokuapp.com/api/users/saved-campaigns/${id}`)
            .then(res => {
                setSavedCampaigns(res.data)
                setLoading(!loading)
            })
            .catch(err => console.log(err.response))
    }, [])

    return (
        <SavedCampaignsStyled>
            <h3>My Saved Campaigns</h3>
            {loading && <p>Loading</p>}
            {savedCampaigns.length === 0 ? <p>Go save some campaigns.</p> :
            savedCampaigns.map((campaign, index) => {
                let rowStyle = 'even'
                if(index%2 !== 1){
                    rowStyle = 'odd'
                }
                return (
                    <SavedCampaignCard
                        key={campaign.id}
                        rowStyle={rowStyle}
                        campaign={campaign}
                    />
                )
            })}
        </SavedCampaignsStyled>
    )
}

export default SavedCampaigns