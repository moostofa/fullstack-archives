import React from 'react';

import {
	HashRouter as Router,
	Routes,
	Route
} from "react-router-dom"

import Subjects from "./routes/Subjects";
import Navbar from './components/navbar/NavBar';
import IndexPage from './routes/IndexPage';
import Accounts from './routes/Accounts';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<IndexPage />} />
				<Route path=":subject" element={<Subjects />} />
				<Route path="accounts/:action" element={<Accounts />} />
			</Routes>
		</Router>
	)
}

export default App;
