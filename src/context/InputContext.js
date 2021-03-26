import React, { useState } from 'react';

export const InputContext = React.createContext({
    markdownText: '',
    setMarkdownText: () => { }
});

const InputContextProvider = props => {

    const [markdownText, setMarkdownText] = useState('');

    return <InputContext.Provider value={{ markdownText, setMarkdownText }}>
        {props.children}
    </InputContext.Provider>;
};

export default InputContextProvider;