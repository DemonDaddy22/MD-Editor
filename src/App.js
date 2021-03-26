import styled from 'styled-components';
import Content from './components/Content';
import Title from './components/Title';
import InputContextProvider from './context/InputContext';

const AppContainer = styled.div`
	background-color: #1f3440;
	display: flex;
	flex-direction: column;
	font-family: 'Roboto Mono', monospace;
	height: inherit;
	overflow-x: inherit;
	overflow-y: inherit;
	width: inherit;
`;

const App = () => <InputContextProvider>
	<AppContainer>
		<Title />
		<Content />
	</AppContainer>
</InputContextProvider>;

export default App;
