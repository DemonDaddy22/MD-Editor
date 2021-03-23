import React from 'react';
import styled from 'styled-components';

const OutputContainer = styled.div`
    background-color: transparent;
    border: 1px solid #E9AB51;
    border-radius: 4px;
    box-shadow: 0 5px 10px #E9AB5127;
    color: #E9AB51;
    flex: 1;
    height: 400px;
    min-width: 450px;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0.75rem;
    word-wrap: normal;
    white-space: pre-wrap;

    @media (min-width: 768px) {
        padding: 1rem;
    }

    @media (min-width: 1024px) {
        height: calc(100vh - 236px);
    }
`;

const Output = React.memo(() => <OutputContainer>
    # Hello
</OutputContainer>);

export default Output;