import React from 'react';
import styled from 'styled-components';

const EditorContainer = styled.textarea`
    background-color: transparent;
    border: 1px solid #E9AB51;
    border-radius: 4px;
    box-shadow: 0 5px 10px #E9AB5127;
    color: #E9AB51;
    flex: 1;
    height: 400px;
    min-width: 450px;
    outline: none;
    padding: 0.75rem;
    resize: none;

    ::placeholder {
        color: #E9AB517f;
    }

    @media (min-width: 768px) {
        font-size: 1.25rem;
        padding: 1rem;
    }

    @media (min-width: 1024px) {
        font-size: 1.5rem;
        height: calc(100vh - 236px);
    }
`;

const Editor = React.memo(() => <EditorContainer placeholder='Start typing...'>

</EditorContainer>);

export default Editor;