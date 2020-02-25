import styled from 'styled-components';

export const CampaignListStyled = styled.div `
    background-color: #EEEEEE;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 1.6rem;
        margin: 3% auto;
    }
`

export const CampaignCardStyled = styled.div `
    width: 80%;
    display: flex;
    border: 1px solid black;
    margin-bottom: 2.5%;
    padding: 1.5%;
    border-radius: 15px;
    background-color: #C2BC95;

    h3 {
        font-size: 1.5rem;
    }

    div {
        width: 40%;
        margin-right: 2%;

        img{
            width: 100%;
        }
    }
`