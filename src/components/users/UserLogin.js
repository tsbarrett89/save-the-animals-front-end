import React, {useState, useContext} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';

import { UserCredentialContext } from '../../contexts/UserCredentialsContext'
import Axios from 'axios';

const UserLogin = () => {
    const {estUser} = useContext(UserCredentialContext);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = values => {
        console.log(values)
        axios.post(`https://save-the-animals-backend.herokuapp.com/api/users/login`, values)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='username'>Username</label>
                <input
                    name='username'
                    ref={register({required: true})}
                />
                {errors.username && <p>Required</p>}
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    ref={register({required: true})}
                />
                {errors.password && <p>Required</p>}
            </form>
        </div>
    )
}

export default UserLogin