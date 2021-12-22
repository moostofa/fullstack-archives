import React, { useState, useEffect } from 'react'
import { Button, FormControl, TextField, Grid } from '@mui/material'

const Login = () => {
    const [state, setstate] = useState({
        username: "",
        password1: "",
        password2: ""
    })

    const handleChange = event => {
        setstate({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    return (
        <Grid container justifyContent='center' alignItems='center' flexDirection='column' gap={1}>
            <h1>Login</h1>
            <Grid item>
                <TextField name='username' label="Username" size='small' value={state.username} onChange={handleChange} />
            </Grid>
            <Grid item>
                <TextField name='password1' label="Password" size='small' type='password' value={state.password1} onChange={handleChange} />
            </Grid>
            <Grid item>
                <TextField name='password2' label="Confirm password" size='small' type='password' value={state.password2} onChange={handleChange} />
            </Grid>
            <Grid item>
                <Button type='submit' variant='contained'>Login</Button>
            </Grid>
        </Grid>
    )
}

export default Login
