import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';

import { OrgCredentialContext } from '../../contexts/OrgCredentialContext'

import { FormStyled } from '../../styling/loginRegistrationStyles'

const OrgLogin = () => {
    const {estOrg} = useContext(OrgCredentialContext);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = values => {
        console.log(values)
        axios.post(`https://save-the-animals-backend.herokuapp.com/api/users/organizations/login`, values)
            .then(res => {
                console.log(res)
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