import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';

import { UserCredentialContext } from '../../contexts/UserCredentialsContext';

import { FormStyled } from '../../styling/loginRegistrationStyles';

const UserRegister = ({props}) => {
    const {estUser} = useContext(UserCredentialContext);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = values => {
        console.log(values)
        axios.post(`https://save-the-animals-backend.herokuapp.com/api/users/register`, values)
        .then(res => {
            console.log(res)
            estUser({username: res.data.username, user_id: res.data.id})
            localStorage.setItem('token', res.data.token)
            props.history.push('/user-dashboard')
        })
        .catch(err => console.log(err))
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