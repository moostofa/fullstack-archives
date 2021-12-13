import React from 'react'
import './App.css';
import HomePage from './components/HomePage';
import Search from './components/Search';
import { Link, Outlet } from "react-router-dom"

const App = () => {
	const items = ["Books", "Anime", "Manga"]
	return (
		<div>{
			items.map(item => (
				<HomePage name={item} />
			))}
		<Link to="/books">Books</Link>
		</div>
	)
}

export default App;
