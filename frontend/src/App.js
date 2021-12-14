import React from 'react'
import './App.css';
import { Link } from "react-router-dom"

const App = () => {
	const items = ["Books", "Anime", "Manga"]
	return (
		<div> {
			items.map(item => (
				<div key={item}>
					<Link key={item} to={`${item.toLocaleLowerCase()}`}>{item}</Link>
				</div>
			))}
		</div>
	)
}

export default App;
