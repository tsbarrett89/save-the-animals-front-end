import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { UserCredentialContext } from '../../contexts/UserCredentialContext';

import { FormStyled } from '../../styling/loginRegistrationStyles';

const UserRegister = ({props}) => {
    const {estUser} = useContext(UserCredentialContext);
    const { register, handleSubmit, errors } = useForm();
    const [errorStatus, setErrorStatus] = useState(null)

    const onSubmit = values => {
        axios.post(`https://save-the-animals-backend.herokuapp.com/api/users/register`, values)
        .then(res => {
            estUser({username: res.data.username, user_id: res.data.user_id})
            localStorage.setItem('token', res.data.token)
            props.history.push('/campaigns')
        })
        .catch(err => {
            setErrorStatus(err.response.status)
        })
    };

    return (
        <div>
            <FormStyled onSubmit={handleSubmit(onSubmit)}>
                <span>
                    <label htmlFor='username'>Username</label>
                    <input
                        name='username'
                        ref={register({required: true})}
                    />
                    {errors.username && <p>Required</p>}
                    {errorStatus === 409 && <p>Username already exists</p>}
                </span>
                <span>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        ref={register({required: true, minLength: 8})}
                    />
                    {errors.password && <p>Required. Must be at least 8 characters long.</p>}
                </span>
                <button type='submit'>Register</button>
            </FormStyled>
        </div>
    )
}

export default UserRegister