import React, { useState, useContext } from 'react'
import axios from 'axios';

import { UserCredentialContext } from '../../contexts/UserCredentialContext'

const SaveButton = props => {
    const{ user } = useContext(UserCredentialContext)
    const[campaign, setCampaign] = useState({
        campaign_id: props.campaign_id,
        user_id: user.user_id
    })


    const saveCampaign = e => {
        e.preventDefault()
        console.log({ campaign })
        axios
            .post(`https://save-the-animals-backend.herokuapp.com/api/users/saved-campaigns`, campaign)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <button onClick={saveCampaign}>Save Campaign</button>
    )
}

export default SaveButton