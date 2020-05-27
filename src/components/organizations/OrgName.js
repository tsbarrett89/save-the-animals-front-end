import React, {useEffect, useState} from 'react';
import axios from 'axios';


const OrgName = ({org_id}) => {
    const [orgName, setOrgName] = useState('')
    
    useEffect(() => {
        axios.get(`https://save-the-animals-backend.herokuapp.com/api/users/organizations/${org_id}`)
            .then (res => {
                setOrgName(res.data)
            })
            .catch(err => console.log(err.response))
    }, [org_id])

    return (
        <div>
            <h3>{orgName.org_name}</h3>
        </div>
    )
}

export default OrgName