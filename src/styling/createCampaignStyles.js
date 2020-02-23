import styled from 'styled-components';

export const CreateCampaignBody = styled.div `
    padding-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #EEEEEE;
    overflow: auto;
    height: 100vh;
`

export const CampaignFormStyled = styled.form `
    width: 450px;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 20px;
    border: 1px solid #DADADA;

    h2 {
        text-align: center;
        font-size: 1.8rem;
        padding-bottom: 20px;
        border-bottom: 1px solid #DADADA;
    }

    input {
        margin-top: 10px;
    }

    label {
        margin-top: 10px;
    }

    button {
        margin-top: 20px;
    }

    .imgUpload {
        width: 90%;
        padding: 3%;

        img {
            width: 100%;
        }
    }
`