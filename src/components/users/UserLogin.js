import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';

import { UserCredentialContext } from '../../contexts/UserCredentialsContext'

import { FormStyled } from '../../styling/loginRegistrationStyles'

const UserLogin = (props) => {
    const {estUser} = useContext(UserCredentialContext);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = values => {
        console.log(values)
        axios.post(`https://save-the-animals-backend.herokuapp.com/api/users/login`, values)
        .then(res => {
            console.log(res)
            estUser({username: res.data.message, user_id: res.data.id})
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
                        ref={register({required: true})}
                    />
                    {errors.password && <p>Required</p>}
                </span>
                <button type='submit'>Log In</button>
            </FormStyled>
        </div>
    )
}

export default UserLogin