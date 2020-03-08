import styled from 'styled-components';

export const OrgEditBody = styled.div `
    width: 100%;
    display: flex;
`

export const OrgEditForm = styled.form `
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 5%;

    input {
        width: 60%;
    }

    textarea {
        min-height: 30px;
    }

    label {
        margin: 1% 0;
    }

    button {
        width: 60%;
    }
`

export const OrgEditImageStyled = styled.div `
    width: 40%;
    padding: 5% 2%;

    img {
        width: 100%;
    }
`