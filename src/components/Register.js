import React, {useContext} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { CredentialContext } from '../contexts/CredentialsContext'
import { tsPropertySignature } from '@babel/types';

const Register = (props) => {
    const {estUser} = useContext(CredentialContext)

    return (
        <div>
           <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                onSubmit={(values) => {
                    axios
                        .post(`https://save-the-animals-backend.herokuapp.com/api/users/register`, values)
                        .then(res => {
                            console.log(res.data);
                            const currentUser = {
                                username: values.username,
                                user_id: res.data.id
                            }
                            localStorage.setItem('token', res.data.access_token);
                            props.history.push('/dashboard')
                        })
                        .catch(err => console.log(err))
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .min(6, "Username must be at least 6 characters long.")
                        .required("We need to know who you are"),
                    password: Yup.string()
                        .min(6, "Password must be at least 6 characters long.")
                        .required("We need you to prove who you are.")
                })}
           >

           </Formik>
        </div>
    )
};

export default Register;