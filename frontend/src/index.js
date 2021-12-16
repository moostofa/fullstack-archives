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
			<Route exact path="/" element={<App />} />
			<Route exact path=":subject" element={<Subjects />} />
			<Route path=":subject/search" element="" />
		</Routes>
	</Router>,
	document.getElementById('root')
);
