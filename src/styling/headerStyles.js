import styled from 'styled-components';

export const HeaderStyled = styled.div `
    display: flex;
    justify-content: space-between;
    background-color: #5C8A47;

    .header-left {
        margin-left: 20px;
        width: 40%;
        display: flex;
        align-items: center;

        img {
            width: 100px;
        }

        h1 {
            font-size: 2.4rem;
            margin-left: 5%;
        }
    }

    .header-right {
        margin: 15px 20px;
        display: flex;
        align-items: center;

        .login {
            color: black;
            margin-right: 20px;
        }

        .dropdown-menu-right {
            right: 0;
            background-color: #6c757d;
        }

        .dropdown-item:hover {
            background-color: #6c757d
        }
    }
`