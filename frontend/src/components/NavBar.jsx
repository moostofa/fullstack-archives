import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { Tab, Tabs } from '@mui/material'

const Navbar = () => {
    const [state, setstate] = useState(0)
	
	const items = ["books", "anime", "manga"]
	return (
		<Tabs 
			value={state} 
			onChange={(event, newValue) => setstate(newValue)} // underlines tabs when switching
		>
			<Tab label="Home" LinkComponent={Link} to="/" /> {
			items.map(item => (
				<Tab 
					key={item} 
					label={item}
					LinkComponent={Link}
					to={item}
				/>
			))}
			<Outlet />
		</Tabs>
	)
}

export default Navbar
