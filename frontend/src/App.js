import React from 'react'
import { Button, Tabs, Tab } from '@mui/material'
import './App.css';
import { Link, Outlet } from 'react-router-dom';

const App = () => {
	const items = ["Books", "Anime", "Manga"]
	return (
		<Tabs>
			<Tab label="Home" LinkComponent={Link} to="/" /> {
			items.map(item => (
				<Tab 
					key={item} 
					label={item} 
					LinkComponent={Link} 
					to={item.toLocaleLowerCase()}
				/>
			))}
			<Outlet />
		</Tabs>
	)
}

export default App;
