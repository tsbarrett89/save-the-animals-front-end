import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import { UserCredentialContext } from '../../../contexts/UserCredentialContext';

import DonationCard from '../../donations/DonationCard';


const UserDonations = () => {
    const { user } = useContext(UserCredentialContext)
    const [donations, setDonations] = useState([])

    useEffect(() => {
        axios.get(`https://save-the-animals-backend.herokuapp.com/api/donations/users/${user.user_id}`)
            .then(res => {
                console.log(res.data)
                setDonations(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            
            {donations.map(donation => {
                return (
                    <DonationCard key={donation.id} donation={donation} />
                )
            })}
        </div>
    )
};

export default UserDonations