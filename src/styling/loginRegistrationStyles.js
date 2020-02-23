import styled from 'styled-components';

export const LoginRegisterBody = styled.div `
    background-color: #EEEEEE;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    
`

export const ContainerStyled = styled.div `
    background-color: white;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 75px;
    border: 1px solid #DADADA;
    
    .nav {
        width: 100%;
        display: flex;
        justify-content: space-between;
    
        li {
            width: 50%;
        }

        a {
            text-align: center;
        }
    }

    .tab-content {
        width: 100%;
    }

    h3 {
        width: 100%;
        font-size: 1.8rem;
        text-align: center;
        margin: 10px auto;
    }
    
    p {
        margin: 15px auto;
    }
`

export const FormStyled = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 6%;

    span {
        width: 60%;
        display: flex;
        flex-direction: column;
        margin-top: 8%;
    }
`