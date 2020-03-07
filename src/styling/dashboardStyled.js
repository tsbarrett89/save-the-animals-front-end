import styled from 'styled-components';

export const DashboardNav = styled.div `
    display: flex;
    flex-direction: column;

    nav {
        display: flex;
        justify-content: space-around;

        a {
            text-decoration: none;
            font-size: 1.6rem;
            color: black;
            width: 50%;
            text-align: center;
            padding: 20px 0px;
        }

        .active {
            background-color: #ABABAB;
        }
    }
`

export const DonationListStyled = styled.div `
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DonationCardStyled = styled.div `
    display: flex;
    justify-content: space-evenly;
`