import React from 'react';
import styled from 'styled-components';
import LogoIcon from '../icon.svg';

const AppTitleContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem 0;

    img {
        height: 30px;
        width: 30px;

        @media (min-width: 1024px) {
            height: 50px;
            width: 50px;
        }
    }

    @media (min-width: 1024px) {
        margin: 2rem 0;
    }
`;

const AppTitle = styled.div`
    color: #FFFFFF;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: -0.5px;
    text-align: center;

    span {
        color: #E9AB51
    }

    @media (min-width: 768px) {
        font-size: 3rem;
    }

    @media (min-width: 1024px) {
        font-size: 4rem;
    }
`;

const Description = styled.div`
    color: #E9AB51;
    font-size: 0.85rem;
    font-weight: 300;
    margin-top: 0.5rem;

    a {
        color: #FFF;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const Title = React.memo(() => <AppTitleContainer>
    <img src={LogoIcon} alt='logo' />
    <AppTitle>
        <span>M</span>ark<span>D</span>own Editor
    </AppTitle>
    <Description>
        Need help with the syntax? <a href='https://commonmark.org/help/' target='_blank' rel='noreferrer'>Visit here</a>
    </Description>
</AppTitleContainer>);

export default Title;