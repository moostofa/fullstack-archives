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
            <FormControl> {
                Object.keys(state).map(key => (
                    <TextField 
                        key={key}
                        name={key}
                        value={state[key][0]}
                        error={state[key][1]}
                        label={
                            key === "username" ? "Username"
                            : key === "password1" ? "Password"
                            : "Confirm password"
                        }
                        type={key[0] === "p" ? "password" : "text"}
                        size='small'
                        onChange={handleChange}
                        sx={{my: 1}}
                        helperText={state[key][1] ? helperTexts[key] : ""}
                    />
                ))}
                <Button type='submit' variant='contained' onClick={handleLogin}>Login</Button>
            </FormControl>
        </div>
    )
}

export default Login
