import styled from 'styled-components';
import Content from './components/Content';
import Title from './components/Title';

const AppContainer = styled.div`
	background-color: #126180;
	display: flex;
	flex-direction: column;
	font-family: 'Roboto Mono', monospace;
	height: inherit;
	overflow-x: inherit;
	overflow-y: inherit;
	width: inherit;
`;

const App = () => <AppContainer>
	<Title />
	<Content />
</AppContainer>;

export default App;
