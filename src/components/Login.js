import React, {useContext} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { CredentialContext } from '../contexts/CredentialsContext'

import { LoginRegisterBody, FormStyled, FieldStyled } from '../styling/loginRegistrationStyles';


const Login = (props) => {
    const { estUser } = useContext(CredentialContext)

    return (
        <LoginRegisterBody>
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
                            localStorage.setItem('token', res.data.token);
                            const currentUser = {
                                username: values.username,
                                user_id: res.data.id
                            }
                            console.log(currentUser)
                            estUser(currentUser)
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
                

                return (
                    <FormStyled onSubmit={handleSubmit}>
                        <FieldStyled
                            type='text'
                            name='username'
                            placeholder='username'
                            value={values.username}
                        />
                        {touched.username && errors.username && (
                            <p className='error'>{errors.username}</p>
                        )}
                        <FieldStyled
                            type='password'
                            name='password'
                            placeholder='password'
                            value={values.password}
                        />
                        {touched.password && errors.password && (
                            <p className='error'>{errors.username}</p>
                        )}
                        <button type='submit'>Log in</button>
                        <p>Not yet a user? <Link to='/register'>Register Here</Link></p>
                    </FormStyled>
                )}}


            </Formik>
        </LoginRegisterBody>
    )
}

export default Login