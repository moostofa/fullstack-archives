import {
	HashRouter as Router,
	Routes,
	Route
} from "react-router-dom"

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Categories from "./routes/Categories";

ReactDOM.render(
	<Router>
		<Routes>
			<Route exact path="/" element={<App />} />
			<Route exact path=":category" element={<Categories />} />
			<Route path=":category/search" element="" />
		</Routes>
	</Router>,
	document.getElementById('root')
);
