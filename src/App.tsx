import { FC } from 'react'

import PagesContainer from './components/PagesContainer/PagesContainer'
import UsersPage from './pages/UsersPage/UsersPage'
import Notifications from './components/Notifications/Notifications'

import './assets/styles/index.scss'
import './App.scss'
import Footer from './components/Footer/Footer'

const App: FC = () => {
	return (
		<div className="app">
			<PagesContainer>
				<UsersPage />
			</PagesContainer>
			<Footer />
			<Notifications />
		</div>
	)
}

export default App
