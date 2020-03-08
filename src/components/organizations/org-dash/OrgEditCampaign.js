import React, {useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const OrgEditCampaign = (props) => {
    const { cid } = useParams();

    const handleChanges = e => {
        props.setCampaignToEdit({...props.campaignToEdit, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.put(`https://save-the-animals-backend.herokuapp.com/api/campaigns/${cid}`, props.campaignToEdit)
            .then(res => {
                console.log(res)
                props.setEditing(false)
            })
            .catch(err => console.log(err))
    }

    const uploadImage = e => {
        const image = e.target.files
        const data = new FormData()
        data.append('file', image[0])
        data.append('upload_preset', 'campaigns')
        axios.post(`https://api.cloudinary.com/v1_1/dwxkvhdoj/image/upload`, data)
            .then(res => {
                console.log(res)
                props.setCampaignToEdit({...props.campaignToEdit, image: res.data.secure_url})
                console.log(props.campaignToEdit)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='campaign'>Campaign Name</label>
                <input
                    name='campaign'
                    value={props.campaignToEdit.campaign}
                    onChange={handleChanges}
                />
                <label htmlFor='location'>Location</label>
                <input
                    name='location'
                    value={props.campaignToEdit.location}
                    onChange={handleChanges}
                />
                <label htmlFor='species'>Species</label>
                <input
                    name='species'
                    value={props.campaignToEdit.species}
                    onChange={handleChanges}
                />
                <label htmlFor='urgency_level'>Urgency Level</label>
                <input
                    name='urgency_level'
                    value={props.campaignToEdit.urgency_level}
                    onChange={handleChanges}
                />
                <label htmlFor='deadline'>Deadline *mm/dd/yyyy*</label>
                <input
                    name='deadline'
                    placeholder='mm/dd/yyyy'
                    value={props.campaignToEdit.deadline}
                    onChange={handleChanges}
                />
                <label htmlFor='description'>Description</label>
                <input
                    name='description'
                    value={props.campaignToEdit.description}
                    onChange={handleChanges}
                />
                <label htmlFor='funding-goal'>Funding Goal</label>
                <input
                    name='funding_goal'
                    value={props.campaignToEdit.funding_goal}
                    onChange={handleChanges}
                />
                <label htmlFor='image'>Image</label>
                <input
                    type='file'
                    name='image'
                    onChange={uploadImage}
                />
                <span className='imgUpload'><img src={props.campaignToEdit.image} alt='upload' /></span>
                <button type='submit'>Submit Changes</button>
            </form>
        </div>
    )
}

export default OrgEditCampaign