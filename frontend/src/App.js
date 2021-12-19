import React from 'react';

import {
	HashRouter as Router,
	Routes,
	Route
} from "react-router-dom"

import Subjects from "./routes/Subjects";
import Navbar from './components/NavBar';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={"Homepage"} />
				<Route path=":subject" element={<Subjects />}>
					<Route path="search" element={"Hello search route"} />
				</Route>
			</Routes>
		</Router>
	)
}

export default App;
