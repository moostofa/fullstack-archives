import {
	HashRouter as Router,
	Routes,
	Route
} from "react-router-dom"

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Booksies from "./routes/Booksies";
import Manga from "./routes/Manga";
import Categories from "./routes/Categories";

ReactDOM.render(
	<Router>
		<Routes>
			<Route exact path="/" element={<App />} />
			<Route path="books" element={<Booksies />} />
			<Route exact path=":category" element={<Categories />} />
			<Route path=":category/search" element="" />
		</Routes>
	</Router>,
	document.getElementById('root')
);
