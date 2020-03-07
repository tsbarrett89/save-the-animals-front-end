import styled from 'styled-components';

export const CampaignListStyled = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 1.8rem;
        margin: 3% auto;
    }
`

export const CampaignCardStyled = styled.div `
    width: 80%;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    margin-bottom: 2.5%;
    padding: 1.5%;
    border-radius: 15px;
    background-color: #C2BC95;

    .top {
        display: flex;
        margin-top: 2.5%;

        .top-left {
            width: 40%;
            margin-left: 2%;

            img{
                width: 100%;
            }
        }

        .top-right {
            margin-left: 10%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            h3{
                font-size: 1.6rem;
            }

            button {
                background-color: #5C8A47;
                width: 100%;
                height: 50px;
                font-size: 1.5rem;
            }
        }
    }

    .mid {
        margin: 3% 6%;
    }

    .bot {
        display: flex;
        flex-direction: column;
        margin: 0 2% 3%;

        

        p {
            margin-top: 3%;
        }
    }
`

export const FundingStyled = styled.div `
    width: 100%;

    .progress {
        border: 1px solid #292F19;
    }
    
    .progress-bar {
        background-color: #5C8A47;
    }
    
    .funding {
            display: flex;
            justify-content: space-between;
    }
`

export const CampaignPageStyled = styled.div `
    width: 80%;
    margin: 5% auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 1.8rem;
    }

    .cp-top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 4% auto;

        h4 {
            font-size: 1.2rem;
        }
    }

    .cp-mid {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .cp-mid-left{
            width: 50%;

            img {
                width: 100%;
            }
        }

        .cp-mid-right {
            width: 45%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-end;

            .donateButton {
                background-color: #409D09;
                border-radius: 0;
                font-size: 1.6rem;
                padding: 20px 30px;
            }

            .Critical {
                background-color: #FF1900;
                font-size: 1.4rem;
                padding: 15px 25px;
            }

            .Urgent {
                background-color: #FF4E00;
                font-size: 1.4rem;
                padding: 15px 25px;
            }

            .Pressing {
                background-color: #EB8B55;
                font-size: 1.4rem;
                padding: 15px 25px;
            }

            .Needed {
                background-color: #EBE155;
                font-size: 1.4rem;
                padding: 15px 25px;
            }
        }
    }

    .cp-bot {
        width: 100%;
        margin: 3% auto;
    }
`

export const DonateStyled = styled.div `
    text-align: right;

    button {
        font-size: 1.5rem;
        border-radius: 0;
        background-color: #409D09;
        margin-top: 3%;
        padding: 15px 25px;
    }
`