import React, {useContext} from 'react';
import axios from 'axios';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

import {CredentialContext} from '../contexts/CredentialsContext.js';

const OrgRegister = (props) => {
    const {user} = useContext(CredentialContext)

    return (
        <div>
            <Formik
                intialValues={{
                    orgName: '',
                    user_id: user.user_id
                }}
                onSubmit={values => {
                    axios
                        .post('https://save-the-animals-backend.herokuapp.com/api/users/register/organizations', values)
                        .then(res => {
                            console.log(res.data)
                            props.history.push('/dashboard')
                        })
                        .catch(err => console.log(err))
                }}
                validationSchema={Yup.object().shape({
                    orgName: Yup.string()
                        .required("We need your official organization name.")
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
                    <Form onSubmit={handleSubmit}>
                        <h3>Organization Registration</h3>
                        <Field
                            type='text'
                            name='orgName'
                            placeholder='Organization Name'
                            value={values.orgName}
                        />
                        <button type='submit'>Register Organization</button>
                    </Form>
                )
                }}
            </Formik>
        </div>
    )
}

export default OrgRegister