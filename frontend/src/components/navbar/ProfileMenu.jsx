import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'

const ProfileMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const redirect = useNavigate()

    const routes = ["profile", "register", "login", "logout"]

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = (event) => {
        setAnchorEl(null)
        const redirectTo = event.currentTarget.dataset.route
        redirect(`accounts/${redirectTo}`)
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
                routes.map(route => (
                    <MenuItem
                        key={route} 
                        data-route={route} 
                        onClick={handleClose}
                    >
                        {route}
                    </MenuItem>
                ))
            }</Menu>
        </div>
    )
}

export default ProfileMenu
