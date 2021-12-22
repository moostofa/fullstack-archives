import React, { useState, useEffect } from 'react'
import { Button, FormControl, TextField } from '@mui/material'

const Register = () => {
    // [0] is the value of the controlled TextField component
    // [1] is a boolean value indicating whether the TextField should display an error text or not
    const [state, setstate] = useState({
        username: ["", false],
        password1: ["", false],
        password2: ["", false]
    })

    const [usernames, setusernames] = useState([])

    useEffect(() => {
        getUsernames()
    }, [])

    const getUsernames = async () => {
        const response = await fetch("/auth/login")
        const json = await response.json()
        console.log(json)
    }

    // helper texts to give feedback to user if their input is invalid
    const helperTexts = {
        username: "Username is already taken.",
        password1: "Passwords do not match.",
        password2: "Passwords do not match."
    }

    // update state whenever a TextField changes
    const handleChange = event => {
        const fieldName = event.target.name
        const val = event.target.value

        // if the field changed is the username field, check if user entered a duplicate username
        const checkUsernameOrPass = (fieldName === "username" && usernames.includes(val)) ? true : false
        setstate({
            ...state,
            [fieldName]: [val, checkUsernameOrPass]
        })
    }

    // register user (send POST data to backend)
    const handleRegistration = () => {
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
            <h1>Register</h1>
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
                <Button type='submit' variant='contained' onClick={handleRegistration}>Register</Button>
            </FormControl>
        </div>
    )
}

export default Register
