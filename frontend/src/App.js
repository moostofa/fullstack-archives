import React from 'react';

import {
	HashRouter as Router,
	Routes,
	Route
} from "react-router-dom"

import Subjects from "./routes/Subjects";
import Navbar from './components/NavBar';
import IndexPage from './routes/IndexPage';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<IndexPage />} />
				<Route path=":subject" element={<Subjects />} />
			</Routes>
		</Router>
	)
}

export default App;
