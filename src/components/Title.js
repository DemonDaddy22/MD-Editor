import React from 'react';
import styled from 'styled-components';

const AppTitle = styled.div`
    color: #FFFFFF;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: -0.5px;
    padding: 2rem 0;
    text-align: center;

    span {
        color: #E9AB51
    }

    @media (min-width: 768px) {
        font-size: 3rem;
    }

    @media (min-width: 1024px) {
        font-size: 4rem;
        padding: 4rem 0;
    }
`;

const Title = React.memo(() => <AppTitle>
    <span>M</span>ark<span>D</span>own Editor
</AppTitle>);

export default Title;