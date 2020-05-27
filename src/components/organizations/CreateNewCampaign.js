import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useParams} from 'react-router-dom';
import axios from 'axios'

import { CampaignFormStyled, CreateCampaignBody } from '../../styling/createCampaignStyles';


const CreateNewCampaign = () => {
    const { id } = useParams();
    const [campaignDetails, setCampaignDetails] = useState({
        org_id: id,
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

    const onSubmit = (values, e) => {
        axios.post(`https://save-the-animals-backend.herokuapp.com/api/campaigns/createNewCampaign`, campaignDetails)
            .then(res => console.log(res))
            .catch(err => console.log(err.response))
        e.target.reset()
    }

    const changeHandler = e => {
        setCampaignDetails({...campaignDetails, [e.target.name]: e.target.value})
    }

    const uploadImage = e => {
        const image = e.target.files
        const data = new FormData()
        data.append('file', image[0])
        data.append('upload_preset', 'campaigns')
        axios.post(`https://api.cloudinary.com/v1_1/dwxkvhdoj/image/upload`, data)
            .then(res => {
                setCampaignDetails({...campaignDetails, image: res.data.secure_url})
            })
            .catch(err => console.log(err.response))
    }

    return (
        <CreateCampaignBody>
            
            <CampaignFormStyled onSubmit={handleSubmit(onSubmit)}>
                <h2>Create a Campaign</h2>
                <label htmlFor='campaign'>Campaign</label>
                <input
                    name='campaign'
                    onChange={changeHandler}
                    ref={register({required: true})}
                />
                {errors.campaign && <p>Required field</p>}
                <label htmlFor='location'>Location</label>
                <input
                    name='location'
                    onChange={changeHandler}
                    ref={register({required: true})}
                />
                {errors.location && <p>Required field</p>}
                <label htmlFor='description'>Description</label>
                <textarea
                    name='description'
                    onChange={changeHandler}
                    ref={register({required: true})}
                />
                {errors.description && <p>Required field</p>}
                <label htmlFor='species'>Species</label>
                <input
                    name='species'
                    onChange={changeHandler}
                    ref={register({required: true})}
                />
                {errors.species && <p>Required field</p>}
                <label htmlFor='urgency_level'>Urgency Level</label>
                <select
                    name='urgency_level'
                    onChange={changeHandler}
                    ref={register({required: true})}
                >
                    <option value=''>Select one</option>
                    <option value='Critical'>Critical</option>
                    <option value='Urgent'>Urgent</option>
                    <option value='Pressing'>Pressing</option>
                    <option value='Needed'>Needed</option>
                </select>
                {errors.urgency_level && <p>Required field</p>}
                <label htmlFor='funding_goal'>Funding Goal</label>
                <input
                    name='funding_goal'
                    onChange={changeHandler}
                    ref={register({required: true})}
                />
                {errors.funding_goal && <p>Required field</p>}
                <label htmlFor='deadline'>Deadline *mm/dd/yyyy*</label>
                <input
                    name='deadline'
                    onChange={changeHandler}
                    ref={register({required: true})}
                />
                {errors.deadline && <p>Required field</p>}
                <label htmlFor='image'>Image</label>
                <input
                    type='file'
                    name='image'
                    onChange={uploadImage}
                />
                <span className='imgUpload'><img src={campaignDetails.image} alt='upload' /></span>
                <button type='submit'>Create Campaign</button>
            </CampaignFormStyled>
        </CreateCampaignBody>
    )
}

export default CreateNewCampaign