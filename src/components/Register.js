import React, {useContext, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { UserCredentialContext } from '../contexts/UserCredentialsContext'

import { LoginRegisterBody, FormStyled } from '../styling/loginRegistrationStyles';

const Register = (props) => {
    const {estUser} = useContext(UserCredentialContext)
    const [orgStatus, setOrgStatus] = useState(false)
    
    const orgStatusSet = e => {
        setOrgStatus(!orgStatus)
        console.log(orgStatus)
    }

    return (
        <div></div>
    )
};

export default Register;