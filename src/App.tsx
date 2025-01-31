import './App.css'
import { Header } from './components'
import { Navigation } from './Navigation'

// TODO 👇
// useFetch + error/loading state pleasant
// <Account> destructuring into smaller components
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
