import styled from 'styled-components';
import { Form, Field } from 'formik';

export const LoginRegisterBody = styled.div `
    background-color: #EEEEEE;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FormStyled = styled(Form) `
    background-color: white;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 75px;
    border: 1px solid #DADADA;

    h3 {
        width: 100%;
        font-size: 1.8rem;
        text-align: center;
        margin: 10px auto;
        padding-bottom: 10px;
        border-bottom: 1px solid #DADADA;
    }
    
    p {
        margin: 15px auto;
    }
`

export const FieldStyled = styled(Field) `
    margin-top: 15px;
    width: 50%;
    height: 30px;

    ::placeholder {
        padding-left: 10px;
    }
`

export const ButtonStyled = styled.button `
    margin-top: 15px;
`