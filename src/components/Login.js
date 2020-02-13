import React, {useContext, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import { CredentialContext } from '../contexts/CredentialsContext'


const Login = () => {
    const { estUser } = useContext(CredentialContext)
    // const [creds, setCreds] = useState({})



    return (
        <div>
            <Formik
                initialValues={{
                    username: "",
                    password: ""
                }}

                onSubmit={(values) => {
                    axios
                        .post(`https://save-the-animals-backend.herokuapp.com/api/users/login`, values)
                        .then(res => {
                            console.log(res.data)
                            localStorage.setItem('token', res.data.access_token);
                            props.history.push('/dashboard')
                        })
                        .catch(error => {
                            console.log(error)
                        })
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
                    } = props
                }}

                return (
                    <Form onSubmit={handleSubmit}>
                        <Field
                            type='text'
                            name='username'
                            placeholder='username'
                            value={values.username}
                        />
                        {touched.username && errors.username && (
                            <p className='error'>{errors.username}</p>
                        )}
                        <Field
                            type='password'
                            name='password'
                            placeholder='password'
                            value={values.password}
                        />
                        {touched.password && errors.password && (
                            <p className='error'>{errors.username}</p>
                        )}

                    </Form>
                )


            </Formik>
        </div>
    )
}

export default Login