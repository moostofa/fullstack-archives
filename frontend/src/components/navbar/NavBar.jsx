import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Tab, Tabs } from '@mui/material'
import ProfileMenu from './ProfileMenu';

// return a navbar to navigation between different subjects
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
			<ProfileMenu />
		</Tabs>
	)
}

export default Navbar
