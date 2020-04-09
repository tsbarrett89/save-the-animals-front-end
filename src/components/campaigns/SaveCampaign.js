import React, { useState, useContext } from 'react'

import { UserCredentialContext } from '../../contexts/UserCredentialContext'

const SaveButton = props => {
    const{ user } = useContext(UserCredentialContext)
    const[campaign, setCampaign] = useState({
        campaign_id: null,
        user_id: null
    })


    const saveCampaign = e => {
        e.preventDefault()
        console.log({campaign_id: props.campaign_id, user_id: user.user_id })
    }

    return (
        <button onClick={saveCampaign}>Save Campaign</button>
    )
}

export default SaveButton