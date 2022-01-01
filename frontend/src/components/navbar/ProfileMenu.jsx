import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'

const ProfileMenu = () => {
    // the anchor element is the element where the menu options will appear from, when the anchor element is clicked
    // open indicates whether the menu is currently being shown or not
    const [anchorEl, setAnchorEl] = useState(null)
    const [authToken, setauthToken] = useState(localStorage.getItem("token"))
    const [isAuthenticated, setisAuthenticated] = useState(authToken !== null)
    const open = Boolean(anchorEl)
    const redirect = useNavigate()

    const profileMenuOptions = [
        ["Register", "Login"],
        ["Profile", "Login", "Logout"]
    ]

    // update profile menu options whenever an auth token appears in localStorage (a user has logged in)
    useEffect(() => {
        const token = localStorage.getItem("token")
        setauthToken(token)
        if (token !== null) setisAuthenticated(true)
    }, [])
    
    // display the menu when the profile icon is clicked
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    // when the menu is closed, either redirect to the MenuItem chosen, or do nothing if something else is clicked.
    const handleClose = (event) => {
        setAnchorEl(null)
        const redirectTo = event.currentTarget.dataset.route
        if (redirectTo !== undefined) redirect(`accounts/${redirectTo.toLowerCase()}`)
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
                profileMenuOptions[isAuthenticated ? 1 : 0].map(route => (
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
