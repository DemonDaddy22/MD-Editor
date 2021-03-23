import React from 'react';
import styled from 'styled-components';
import Editor from './Editor';
import Output from './Output';

const ContentWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 0 1rem 1rem;

    @media (min-width: 768px) {
        margin: 0 2rem 1rem;
    }

    @media (min-width: 1024px) {
        margin: 0 4rem 2rem;
    }
`;

const Content = React.memo(() => <ContentWrapper>
    <Editor />
    <Output />
</ContentWrapper>);

export default Content;