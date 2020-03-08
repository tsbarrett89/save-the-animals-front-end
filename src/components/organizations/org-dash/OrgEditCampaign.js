import React, {useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const OrgEditCampaign = (props) => {
    const { id } = useParams();
    const [campaignToEdit, setCampaignToEdit] = useState({})
    const [editing, setEditing] = useState(false)

    const handleChanges = e => {
        setCampaignToEdit({...campaignToEdit, [e.target.name]: e.target.value})
    }

    const edit = (campaign) => {
        setCampaignToEdit({...campaign, org_id: id})
        setEditing(!editing)
    }

    const uploadImage = e => {
        const image = e.target.files
        const data = new FormData()
        data.append('file', image[0])
        data.append('upload_preset', 'campaigns')
        axios.post(`https://api.cloudinary.com/v1_1/dwxkvhdoj/image/upload`, data)
            .then(res => {
                console.log(res)
                setCampaignToEdit({...campaignToEdit, image: res.data.secure_url})
                console.log(campaignToEdit)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {!editing && <button onClick={() => edit(props.campaign)}>Edit Campaign</button>}
            {editing &&
                <form>
                    <label htmlFor='campaign'>Campaign Name</label>
                    <input
                        name='campaign'
                        value={campaignToEdit.campaign}
                        onChange={handleChanges}
                    />
                    <label htmlFor='location'>Location</label>
                    <input
                        name='location'
                        value={campaignToEdit.location}
                        onChange={handleChanges}
                    />
                    <label htmlFor='species'>Species</label>
                    <input
                        name='species'
                        value={campaignToEdit.species}
                        onChange={handleChanges}
                    />
                    <label htmlFor='urgency_level'>Urgency Level</label>
                    <input
                        name='urgency_level'
                        value={campaignToEdit.urgency_level}
                        onChange={handleChanges}
                    />
                    <label htmlFor='deadline'>Deadline</label>
                    <input
                        name='deadline'
                        type='date'
                        value={campaignToEdit}
                        onChange={handleChanges}
                    />
                    <label htmlFor='description'>Description</label>
                    <input
                        name='description'
                        value={campaignToEdit.description}
                        onChange={handleChanges}
                    />
                    <label htmlFor='funding-goal'>Funding Goal</label>
                    <input
                        name='funding_goal'
                        value={campaignToEdit.funding_goal}
                        onChange={handleChanges}
                    />
                    <label htmlFor='image'>Image</label>
                    <input
                        type='file'
                        name='image'
                        onChange={uploadImage}
                    />
                    <span className='imgUpload'><img src={campaignToEdit.image} alt='upload' /></span>
                </form>}
        </div>
    )
}

export default OrgEditCampaign