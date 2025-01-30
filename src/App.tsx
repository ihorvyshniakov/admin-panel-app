import './App.css'
import { Header } from './components'
import { Navigation } from './Navigation'

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
