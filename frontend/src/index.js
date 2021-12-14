import {
	HashRouter as Router,
	Routes,
	Route
} from "react-router-dom"

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Books from "./routes/Books";
import Manga from "./routes/Manga";
import Categories from "./routes/Categories";

ReactDOM.render(
	<Router>
		<Routes>
			<Route exact path="/" element={<App />} />
			<Route path="books" element={<Books />} />
			<Route exact path=":category" element={<Manga />} />
			<Route path=":category/search" element={<Categories />} />
		</Routes>
	</Router>,
	document.getElementById('root')
);
