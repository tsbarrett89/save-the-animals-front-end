import React, {useContext, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { CredentialContext } from '../contexts/CredentialsContext'


const Login = () => {
    const { estUser } = useContext(CredentialContext)
    const [creds, setCreds] = useState({})



    return (
        <div>
            <Formik
                initialValues={{
                    username: "",
                    password: ""
                }}

                onSubmit={(values) => {
                    axios
                        .post(`https://save-the-animals-backend.herokuapp.com/api/users/login`, creds)
                        .then(res => {
                            console.log(res.data)
                            localStorage.setItem('token', res.data.access_token);
                            props.history.push('/dashboard')
                        })
                        .catch(error => {
                            console.log(error)
                        })
                }}
            >

            </Formik>
        </div>
    )
}

export default Login