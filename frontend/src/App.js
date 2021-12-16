import React from 'react'
import Button from '@mui/material/Button'
import './App.css';
import { Link } from 'react-router-dom';

const App = () => {
	const items = ["Books", "Anime", "Manga"]
	return (
		<div> {
			items.map(item => (
				<div key={item}>
					<Button 
						key={item}
						LinkComponent={Link}
						to={item.toLocaleLowerCase()}
						variant='contained'
					>
						{item}
					</Button>
				</div>
			))}
		</div>
	)
}

export default App;
