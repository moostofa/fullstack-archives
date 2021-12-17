import React, { useState } from 'react'
import { Tabs, Tab } from '@mui/material'
import './App.css';
import { Link, Outlet } from 'react-router-dom';

const App = () => {
	const [state, setstate] = useState(0)
	const handleChange = (event, newValue) => {
		setstate(newValue)
	}
	
	const items = ["Books", "Anime", "Manga"]
	return (
		<Tabs value={state} onChange={handleChange}>
			<Tab label="Home" LinkComponent={Link} to="/" /> {
			items.map((item, index) => (
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
