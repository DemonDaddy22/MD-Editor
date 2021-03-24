import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { InputContext } from '../context/InputContext';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
    
    @media (min-width: 768px) {
        padding: 0.5rem 1rem;
    }

    @media (min-width: 1024px) {
        height: calc(100vh - 236px);
    }
`;

const renderers = {
    code: ({ language, value }) => {
        return <SyntaxHighlighter style={dark} language={language} children={value} showLineNumbers wrapLongLines
            customStyle={{ backgroundColor: '#2e4d5e', textShadow: 'none', border: 'none' }} codeTagProps={{ style: { textShadow: 'none' } }} />;
    }
};

const Output = React.memo(() => {

    const { markdownText } = useContext(InputContext);

    return <OutputContainer>
        <ReactMarkdown plugins={[gfm]} renderers={renderers} children={markdownText} />
    </OutputContainer>;
});

export default Output;