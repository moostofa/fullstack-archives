import React, { useState } from 'react'
import { Button, FormControl, FormHelperText, TextField } from '@mui/material'

const Login = () => {
    const [state, setstate] = useState({
        username: "",
        password: "",
    })

    const [helperText, setHelperText] = useState("")

    // update state whenever a TextField changes
    const handleChange = event => {
        setstate({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    // login user in (send POST data to backend)
    const handleLogin = () => {
        const username = state.username
        const password = state.password
        console.log(`TODO`)
    }

    return (
        <div>
            <h1>Login</h1>
            <FormControl> 
            <FormHelperText>{helperText}</FormHelperText> {
                Object.keys(state).map(key => (
                    <TextField 
                        key={key}
                        name={key}
                        value={state[key]}
                        label={key === "username" ? "Username" : "Password"}
                        type={key[0] === "p" ? "password" : "text"}
                        size='small'
                        onChange={handleChange}
                        sx={{my: 1}}
                    />
                ))}
                <Button type='submit' variant='contained' onClick={handleLogin}>Login</Button>
            </FormControl>
        </div>
    )
}

export default Login
