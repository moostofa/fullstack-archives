import {
	HashRouter as Router,
	Routes,
	Route
} from "react-router-dom"

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Subjects from "./routes/Subjects";

ReactDOM.render(
	<Router>
		<Routes>
			<Route exact path="/" element={<App />}>
				<Route path=":subject" element={<Subjects />}>
					<Route path="search" element="" />
				</Route>
			</Route>
		</Routes>
	</Router>,
	document.getElementById('root')
);
