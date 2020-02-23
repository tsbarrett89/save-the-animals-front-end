import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';

import { OrgCredentialContext } from '../../contexts/OrgCredentialContext';

import { FormStyled } from '../../styling/loginRegistrationStyles';

const OrgRegister = () => {
    const {estOrg} = useContext(OrgCredentialContext);
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = values => {
        axios.post(`https://save-the-animals-backend.herokuapp.com/api/users/register/organizations`, values)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
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