import React from 'react'
import './App.css';
import HomePage from './components/HomePage';
import Search from './components/Search';

const App = () => {
	const items = ["Books", "Anime", "Manga"]
	return (
	<div>
	{
		items.map(item => (
			<HomePage name={item} />
		))
	}
	<Search />
	</div>
	)
}

export default App;
