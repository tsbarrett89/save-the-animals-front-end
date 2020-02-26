import React, {useState, useContext} from 'react';
import axios from 'axios';

import { UserCredentialContext } from '../contexts/UserCredentialContext'

const Donate = ({campaign_id}) => {
    const {user} = useContext(UserCredentialContext)
    const [donationDetails, setDonationDetails] = useState({
        user_id: user.user_id,
        campaign_id: campaign_id,
        donation_amount: 0
    })
    console.log(user)


    const handleChange = e => {
        setDonationDetails({...donationDetails, [e.target.name]:e.target.value})
    }

    const sendDonation = () => {
        console.log(donationDetails)
        axios.post(`https://save-the-animals-backend.herokuapp.com/api/donations/`, donationDetails)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return (
        <div>
            <input
                name='donation_amount'
                type='number'
                onChange={handleChange}
            />
            <button onClick={sendDonation}>Send Donation</button>
        </div>
    )
}

export default Donate