import React, {useState, useContext} from 'react';
import axios from 'axios';

import { UserCredentialContext } from '../contexts/UserCredentialContext'

import { DonateStyled } from '../styling/campaignsStyled';

const Donate = ({campaign_id}) => {
    const {user} = useContext(UserCredentialContext)
    const [donationDetails, setDonationDetails] = useState({
        user_id: user.user_id,
        campaign_id: campaign_id,
        donation_amount: 0
    })
    const [donated, setDonated] = useState(false)


    const handleChange = e => {
        setDonationDetails({...donationDetails, [e.target.name]:e.target.value})
    }

    const sendDonation = () => {
        axios.post(`https://save-the-animals-backend.herokuapp.com/api/donations/`, donationDetails)
        .then(res => {
            if(res.status === 201) {
                setDonated(true)
            }
        })
        .catch(err => console.log(err.response))
    }
    return (
        <div>
        {!donated ?
        <DonateStyled>
            <label htmlFor='donation_amount'>Donation Amount $</label>
            <input
                name='donation_amount'
                type='number'
                onChange={handleChange}
            />
            <button onClick={sendDonation}>Send Donation</button>
        </DonateStyled> :
        <div>Thank you for your donation!</div> }
        </div>
    )
}

export default Donate