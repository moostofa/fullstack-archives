import {
	HashRouter,
	Routes,
	Route
} from "react-router-dom"

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Books from "./routes/Books";

ReactDOM.render(
	<HashRouter>
	<Routes>
		<Route exact path="/" element={<App />} />
		<Route path="books" element={<Books />} />
	</Routes>
	</HashRouter>,
	document.getElementById('root')
);
