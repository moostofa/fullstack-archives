import React, { useState, useEffect } from 'react'
import { Button, FormControl, TextField, Grid } from '@mui/material'

const Login = () => {
    const [state, setstate] = useState({
        username: ["", false],
        password1: ["", false],
        password2: ["", false]
    })

    const helperTexts = {
        username: "Username is already taken.",
        password1: "Passwords do not match.",
        password2: "Passwords do not match."
    }

    const handleChange = event => {
        setstate({
            ...state,
            [event.target.name]: [event.target.value, false]
        })
    }

    const handleLogin = () => {
        const password1 = state.password1[0]
        const password2 = state.password2[0]
        if (password1 !== password2) {
            setstate({
                ...state,
                password1: [password1, true],
                password2: [password2, true]
            })
            return
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <FormControl>
                <TextField error={state.username[1]} name='username' label="Username" size='small' value={state.username[0]} onChange={handleChange} sx={{my: 1}} helperText={state.username[1] ? helperTexts.username : ""} />
                <TextField error={state.password1[1]} name='password1' label="Password" size='small' type='password' value={state.password1[0]} onChange={handleChange} sx={{my: 1}} helperText={state.password1[1] ? helperTexts.password1 : ""} />
                <TextField error={state.password2[1]} name='password2' label="Confirm password" size='small' type='password' value={state.password2[0]} onChange={handleChange} sx={{my: 1}} helperText={state.password2[1] ? helperTexts.password2 : ""} />
                <Button type='submit' variant='contained' onClick={handleLogin}>Login</Button>
            </FormControl>
        </div>
    )
}

export default Login
