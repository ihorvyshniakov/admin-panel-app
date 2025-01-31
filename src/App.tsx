import './App.css'
import { Header } from './components'
import { Navigation } from './Navigation'

// TODO 👇
// add Jest tests
// ? add Material UI

const App = (): JSX.Element => {
	return (
		<>
			<Header />
			<main>
				<Navigation />
			</main>
		</>
	)
}

export default App
