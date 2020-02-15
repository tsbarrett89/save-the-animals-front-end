import React, {useContext, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import { CredentialContext } from '../contexts/CredentialsContext'

import { LoginRegisterBody, FormStyled, FieldStyled, ButtonStyled } from '../styling/loginRegistrationStyles';

const Register = (props) => {
    const {estUser} = useContext(CredentialContext)
    const [orgStatus, setOrgStatus] = useState(false)
    
    const orgStatusSet = e => {
        setOrgStatus(!orgStatus)
        console.log(orgStatus)
    }

    return (
        <LoginRegisterBody>
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
                                user_id: res.data.user_id[0]
                            }
                            estUser(currentUser)
                            localStorage.setItem('token', res.data.token);
                            {orgStatus ? props.history.push('/register-org'): props.history.push('/dashboard')}
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
               {props => {
                   const {
                       values,
                       touched,
                       errors,
                       handleSubmit
                   } = props;

                return (
                    <FormStyled onSubmit={handleSubmit}>
                        <h3>Register</h3>
                        <FieldStyled
                            type='text'
                            name='username'
                            placeholder='username'
                            value={values.username}
                        />
                        {touched.username && errors.username && (
                            <p className="error">{errors.username}</p>
                        )}
                        <FieldStyled
                            type='password'
                            name='password'
                            placeholder='password'
                            value={values.password}
                        />
                        {touched.password && errors.password && (
                            <p className="error">{errors.password}</p>
                        )}
                        <ButtonStyled type='submit'>Register as Supporter</ButtonStyled>
                        <ButtonStyled onClick={orgStatusSet} type='submit'>Register as Organization</ButtonStyled>
                        <p>Already registered? <Link to='/login'>Log in here.</Link></p>
                    </FormStyled>
                )
               }}
           </Formik>
        </LoginRegisterBody>
    )
};

export default Register;