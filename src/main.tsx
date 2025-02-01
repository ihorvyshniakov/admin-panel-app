import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { StoreContextProvider } from './context/StoreContext.tsx'

createRoot(document.getElementById('root')!).render(
	<StoreContextProvider>
		<BrowserRouter basename='/admin-panel-app'>
			<App />
		</BrowserRouter>
	</StoreContextProvider>
)
