import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { InputContext } from '../context/InputContext';
import gfm from 'remark-gfm';
import inlineLinks from 'remark-inline-links';

const OutputContainer = styled.div`
    background-color: transparent;
    border: 1px solid #E9AB51;
    border-radius: 4px;
    box-shadow: 0 5px 10px #E9AB5127;
    color: #E9AB51;
    flex: 1;
    height: 400px;
    min-width: 300px;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0.25rem 0.75rem;
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

    table {
        border: 1px solid #E9AB51;
        border-collapse: collapse;
    }

    td, th {
        border: 1px solid #E9AB51;
        padding: 0.5rem 1rem;
    }

    td {
        color: #FFF;
    }

    img {
        width: 100%;
        height: auto;
    }

    pre {
        background-color: #2e4d5e;
        border-radius: 4px;
        padding: 0.5rem;
    }

    code {
        color: #33EE66;
        font-size: 0.8rem;
        line-height: 1.5rem;
    }
    
    @media (min-width: 768px) {
        min-width: 400px;
        padding: 0.5rem 1rem;
    }

    @media (min-width: 1024px) {
        height: calc(100vh - 236px);
    }
`;

const Output = React.memo(() => {

    const { markdownText } = useContext(InputContext);

    return <OutputContainer>
        <ReactMarkdown plugins={[gfm, inlineLinks]} children={markdownText} />
    </OutputContainer>;
});

export default Output;