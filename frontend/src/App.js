import React from 'react'
import './App.css';
import HomePage from './components/HomePage';

const App = () => {
	const items = ["Books", "Anime", "Manga"]
	return (
	<div>
	{
		items.map(item => (
			<HomePage name={item} />
		))
	}
	</div>
	)
}

export default App;
