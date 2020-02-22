import React from 'react';
import {useForm} from 'react-hook-form';

import { CampaignFormStyled, CreateCampaignBody } from '../../styling/createCampaignStyles';

const CreateNewCampaign = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = values => {
        console.log(values)
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
                <button type='submit'>Create Campaign</button>
            </CampaignFormStyled>
        </CreateCampaignBody>
    )
}

export default CreateNewCampaign