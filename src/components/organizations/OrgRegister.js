import React, {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';

import { OrgCredentialContext } from '../../contexts/OrgCredentialContext';

import { FormStyled } from '../../styling/loginRegistrationStyles';

const OrgRegister = ({props}) => {
    const {estOrg} = useContext(OrgCredentialContext);
    const {register, handleSubmit, errors} = useForm();
    const [errorStatus, setErrorStatus] = useState(null);

    const onSubmit = values => {
        axios.post(`https://save-the-animals-backend.herokuapp.com/api/users/register/organizations`, values)
            .then(res => {
                console.log(res)
                estOrg({org_name: res.data.organization, org_id: res.data.org_id})
                localStorage.setItem('token', res.data.token)
                props.history.push(`/org-dashboard/${res.data.org_id}`)
            })
            .catch(err => {
                console.log(err.response)
                setErrorStatus(err.response.status)
            })
    };

    return (
        <div>
            <FormStyled onSubmit={handleSubmit(onSubmit)}>
                <span>
                    <label htmlFor='org_name'>Organization Name</label>
                    <input
                        name='org_name'
                        ref={register({required: true})}
                    />
                    {errors.org_name && <p>Required</p>}
                    {errorStatus === 409 && <p>Organization name already exists</p>}
                </span>
                <span>
                    <label htmlFor='location'>Location</label>
                    <input
                        name='location'
                        ref={register({required: true})}
                    />
                    {errors.location && <p>Required</p>}
                </span>
                <span>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        ref={register({required: true, minLength: 8})}
                    />
                    {errors.password && (<p>Required. Must be 8 characters long.</p>)}
                </span>
                <button type='submit'>Register</button>
            </FormStyled>
        </div>
    )
}

export default OrgRegister