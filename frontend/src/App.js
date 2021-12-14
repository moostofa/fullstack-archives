import React from 'react'
import './App.css';
import HomePage from './components/HomePage';
import { Link, Outlet } from "react-router-dom"

const App = () => {
	const items = ["Books", "Anime", "Manga"]
	return (
		<div>
			<ul>{
				items.map((item, index) => (
					<li key={index}>
						<HomePage name={item} />
					</li>
				))}
			</ul>
		<Link to={"books"}>Books</Link>
		<Link to={"manga"}>MANGA</Link>
		<Outlet />
		</div>
	)
}

export default App;
