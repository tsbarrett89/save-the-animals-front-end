import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NumberFormat from 'react-number-format';
import { Progress } from 'reactstrap';

import { FundingStyled } from '../../styling/campaignsStyled'

const FundingRecieved = ({id, funding}) => {
    const [donationsTotal, setDonationsTotal] = useState(0)

    const donationPercentage = (donations, goal) => {
        return (donations/goal) * 100
    }

    useEffect(() => {
        axios
            .get(`https://save-the-animals-backend.herokuapp.com/api/donations/campaigns/${id}`)
            .then(res => {
                const totalDonations = res.data.reduce((accumulator, donation) => {
                    return accumulator += donation.donation_amount
                }, 0);
                setDonationsTotal(totalDonations)
            })
            .catch(err => console.log(err))
    }, [id])


    return (
        <FundingStyled>
            <div className='funding'>
                <NumberFormat value={donationsTotal} displayType={'text'} thousandSeparator={true} prefix={'Donated $'} />
                <NumberFormat value={funding} displayType={'text'} thousandSeparator={true} prefix={'of Goal $'} />
            </div>
            <Progress value={donationPercentage(donationsTotal, funding)} />
        </FundingStyled>
    )
}

export default FundingRecieved