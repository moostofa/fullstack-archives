import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, FormControl, FormHelperText, TextField } from '@mui/material'

const Login = () => {
    const [state, setstate] = useState({
        username: "",
        password: "",
    })

    // helperText to display if username and/or password are invalid
    const [helperText, setHelperText] = useState("")
    const redirect = useNavigate()

    // update state whenever a TextField changes
    const handleChange = event => {
        setstate({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    // login user in (send POST data to backend)
    const handleLogin = async () => {
        const username = state.username
        const password = state.password
        
        // POST data to retrieve auth token
        const response = await fetch("/auth/login", {
            method: "post",
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        const result = await response.json()
        
        // get and set auth token in localStorage & redirect user if successful
        const token = result.token
        if (token === undefined) {
            setHelperText("Invalid credentials. Username and/or password are incorrect.")
            return
        }
        localStorage.removeItem("token")
        localStorage.setItem("token", token)
        redirect("/")
    }

    return (
        <div>
            <h1>Login</h1>
            <FormControl sx={{maxWidth: 200}}> 
            <FormHelperText> {helperText} </FormHelperText> {
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
