import React, {useState, useContext} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios'

import { OrgCredentialContext } from '../../contexts/OrgCredentialContext';

import { CampaignFormStyled, CreateCampaignBody } from '../../styling/createCampaignStyles';


const CreateNewCampaign = () => {
    const { org } = useContext(OrgCredentialContext)
    const [campaignDetails, setCampaignDetails] = useState({
        org_id: org.org_id,
        campaign: "",
        location: "",
        description: "",
        species: "",
        urgency_level: "",
        funding_goal: null,
        deadline: "",
        image: ""
    })
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = values => {
        console.log(values)
        setCampaignDetails({...campaignDetails, values})
        console.log(campaignDetails)
    }

    return (
        <CreateCampaignBody>
            
            <CampaignFormStyled onSubmit={handleSubmit(onSubmit)}>
                <h2>Create a Campaign</h2>
                <label htmlFor='campaign'>Campaign</label>
                <input
                    name='campaign'
                    ref={register({required: true})}
                />
                {errors.campaign && <p>Required field</p>}
                <label htmlFor='location'>Location</label>
                <input
                    name='location'
                    ref={register({required: true})}
                />
                {errors.location && <p>Required field</p>}
                <label htmlFor='description'>Description</label>
                <input
                    name='description'
                    ref={register({required: true})}
                />
                {errors.description && <p>Required field</p>}
                <label htmlFor='species'>Species</label>
                <input
                    name='species'
                    ref={register({required: true})}
                />
                {errors.species && <p>Required field</p>}
                <label htmlFor='urgency_level'>Urgency Level</label>
                <input
                    name='urgency_level'
                    ref={register({required: true})}
                />
                {errors.urgency_level && <p>Required field</p>}
                <label htmlFor='funding_goal'>Funding Goal</label>
                <input
                    name='funding_goal'
                    ref={register({required: true})}
                />
                {errors.funding_goal && <p>Required field</p>}
                <label htmlFor='deadline'>Deadline</label>
                <input
                    name='deadline'
                    ref={register({required: true})}
                />
                {errors.deadline && <p>Required field</p>}
                <label htmlFor='image'>Image</label>
                <input
                    type='file'
                    name='image'
                    onChange={uploadImage}
                />
                <button type='submit'>Create Campaign</button>
            </CampaignFormStyled>
        </CreateCampaignBody>
    )
}

export default CreateNewCampaign