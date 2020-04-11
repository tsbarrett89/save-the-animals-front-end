import styled from 'styled-components'

export const SavedCampaignsStyled = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    padding-top: 3%;

    h3 {
        font-size: 1.5rem;
        width: 100%;
        text-align: center;
        background-color: #5C8A47;
        padding: 1.5%;
    }

    div {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 1%;
        
        a {
            color: #1F2056;
        }
    }

    .even {
        background-color: #5C8A47;

        
    }
`