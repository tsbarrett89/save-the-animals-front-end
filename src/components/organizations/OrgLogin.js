import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';

import { OrgCredentialContext } from '../../contexts/OrgCredentialContext'

import { FormStyled } from '../../styling/loginRegistrationStyles'

const OrgLogin = ({props}) => {
    const {estOrg} = useContext(OrgCredentialContext);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = values => {
        console.log(values)
        axios.post(`https://save-the-animals-backend.herokuapp.com/api/users/organizations/login`, values)
            .then(res => {
                console.log(res)
                estOrg({org_name:res.data.message, org_id:res.data.id})
                localStorage.setItem('token', res.data.token)
                props.history.push('/org-dashboard')
            })
            .catch(err => console.log(err))
    };

    return (
        <div>
            <FormStyled onSubmit={handleSubmit(onSubmit)}>
                <span>
                    <label htmlFor='org_name'>Organization</label>
                    <input
                        name='org_name'
                        ref={register({required: true})}
                    />
                    {errors.org_name && <p>Required</p>}
                </span>
                <span>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        ref={register({required: true})}
                    />
                    {errors.password && <p>Required</p>}
                </span>
                <button type='submit'>Log In</button>
            </FormStyled>
        </div>
    )
}

export default OrgLogin