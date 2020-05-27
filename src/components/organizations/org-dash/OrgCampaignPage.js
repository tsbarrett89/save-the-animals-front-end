import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { OrgCampaignPageStyled } from '../../../styling/dashboardStyled';
import OrgEditCampaign from './OrgEditCampaign';
import OrgCampaignDetails from './OrgCampaignDetails';

const OrgCampaignPage = () => {
    const { id, cid } = useParams();
    const [campaign, setCampaign] = useState({})
    const [editing, setEditing] = useState(false)
    const [campaignToEdit, setCampaignToEdit] = useState({})

    useEffect(() => {
        axios.get(`https://save-the-animals-backend.herokuapp.com/api/campaigns/${cid}`)
            .then(res => {
                setCampaign(res.data)
            })
            .catch(err => console.log(err.response))
    }, [cid, editing])

    const edit = (campaign) => {
        setCampaignToEdit({...campaign, org_id: id})
        setEditing(!editing)
    }

    return (
        <OrgCampaignPageStyled>
            {!editing && <OrgCampaignDetails campaign={campaign} />}
            {!editing && <button onClick={() => edit(campaign)}>Edit Campaign</button>}
            {editing && <OrgEditCampaign campaignToEdit={campaignToEdit} setCampaignToEdit={setCampaignToEdit} setEditing={setEditing} />}
            {editing && <button onClick={() => edit({})}>Nevermind</button>}
        </OrgCampaignPageStyled>
    )
}

export default OrgCampaignPage