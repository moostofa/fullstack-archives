import React from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import Profile from '../routes/Profile'
import Register from '../routes/Register'
import Login from '../routes/Login'

const routes = {
    Profile: <Profile />,
    Register: <Register />,
    Login: <Login />,
    Logout: ""
}

const ProfileMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = (event) => {
        console.log(event.currentTarget.dataset.route)
        setAnchorEl(null);
    }

    return (
        <div style={{marginLeft: "auto"}}>
            <IconButton
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <AccountCircle fontSize='large' />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >{
                Object.keys(routes).map(route => (
                    <MenuItem key={route} data-route={route} onClick={handleClose}>{route}</MenuItem>
                ))
            }</Menu>
        </div>
    )
}

export default ProfileMenu
