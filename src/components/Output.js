import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { InputContext } from '../context/InputContext';

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
    padding: 0 0.75rem;
    word-wrap: normal;
    white-space: pre-wrap;

    hr {
        border-color: #E9AB51;
    }

    a {
        color: #FFF;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    pre {
        background-color: #2e4d5e;
        border-radius: 4px;
        color: #0BF77D;
        line-height: 1.5rem;
        padding: 0.5rem;
    }

    @media (min-width: 768px) {
        padding: 0 1rem;
    }

    @media (min-width: 1024px) {
        height: calc(100vh - 236px);
    }
`;

const Output = React.memo(() => {

    const { markdownText } = useContext(InputContext);

    return <OutputContainer>
        <ReactMarkdown allowDangerousHtml>
            {markdownText}
        </ReactMarkdown>
    </OutputContainer>;
});

export default Output;