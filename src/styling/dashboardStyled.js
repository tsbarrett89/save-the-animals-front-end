import styled from 'styled-components';

export const DashboardBody = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%
`

export const DashboardNav = styled.nav `
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: #CFCFCF;

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
`

export const OrgDashNavStyled = styled.div `
        width: 15%;
        display: flex;
        flex-direction: column;
        background-color: #CFCFCF;
        overflow: auto;

        a {
            text-decoration: none;
            font-size: 1.1rem;
            color: black;
            width: 100%;
            padding: 10px;
        }

        .active {
            background-color: #ABABAB;
            border-top: 1px solid grey;
        }
`

export const OrgCampaignsStyled = styled.div `
    display: flex;
    min-height: 81vh;
`

export const OrgCampaignPageStyled = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;

    .campaign-left {
        width: 40%;
    }

    .campaign-right {
        width: 40%;

        img {
            width: 100%;
        }
    }
`

export const DonationListStyled = styled.div `
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DonationCardsHeader = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    background-color: #FBBF68;
    margin-top: 30px;

    p {
        width: 30%;
        text-align: center;
        padding: 15px 0;
        

        &:nth-child(2) {
            width: 35%;
            border-right: solid 1px grey;
            border-left: solid 1px grey;
        }
    }
`

export const DonationCardStyled = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;

    p {
        width: 30%;
        text-align: center;
        padding-top: 10px;
        font-size: 1.1rem;

        &:nth-child(2) {
            width: 35%;
            border-right: solid 1px grey;
            border-left: solid 1px grey;
        }
    }
`