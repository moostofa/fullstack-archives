import React, { useEffect, useState } from 'react'
import { Button, FormControl, TextField } from '@mui/material'
import Cookies from 'js-cookie'

const Register = () => {
    // [0] is the value of the controlled TextField component
    // [1] is a boolean value indicating whether the TextField should display an error text or not
    const [credentials, setcredentials] = useState({
        username: ["", false],
        password1: ["", false],
        password2: ["", false]
    })

    // stores a list of usernames that are already taken
    const [usernames, setUsernames] = useState([])

    useEffect(() => {
        getUsernames()
    }, [])

    const getUsernames = async () => {
        const response = await fetch("/auth/usernames")
        const users = await response.json()
        setUsernames(users)
    }

    // helper texts to give feedback to user if their input is invalid
    const helperTexts = {
        username: "Username is already taken.",
        password1: "Passwords do not match.",
        password2: "Passwords do not match."
    }

    // update credentials whenever a TextField changes
    const handleChange = event => {
        const fieldName = event.target.name
        const val = event.target.value

        // if the field changed is the username field, check if user entered a duplicate username
        // if the username is a duplicate, the username TextField will display an error
        const checkUsernameOrPass = (fieldName === "username" && usernames.includes(val)) ? true : false
        setcredentials({
            ...credentials,
            [fieldName]: [val, checkUsernameOrPass]
        })
    }

    // register user (send POST data to backend)
    const handleRegistration = async () => {
        // prevent submit if username is invalid
        if (credentials.username[1]) return

        // validate password match
        const password1 = credentials.password1[0]
        const password2 = credentials.password2[0]
        if (password1 !== password2) {
            setcredentials({
                ...credentials,
                password1: [password1, true],
                password2: [password2, true]
            })
            return
        }

        // register the user by sending POST data to api
        const response = await fetch("/auth/register", {
            method: "POST",
            body: JSON.stringify({
                username: credentials.username[0],
                password1,
                password2
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get("csrftoken")
              },
        })
        const result = await response.json()
        console.log(result)
    }

    return (
        <div>
            <h1>Register</h1>
            <FormControl> {
                Object.keys(credentials).map(key => (
                    <TextField 
                        key={key}
                        name={key}
                        value={credentials[key][0]}
                        error={credentials[key][1]}
                        label={
                            key === "username" ? "Username"
                            : key === "password1" ? "Password"
                            : "Confirm password"
                        }
                        type={key[0] === "p" ? "password" : "text"}
                        size='small'
                        onChange={handleChange}
                        sx={{my: 1}}
                        helperText={credentials[key][1] ? helperTexts[key] : ""}
                    />
                ))}
                <Button type='submit' variant='contained' onClick={handleRegistration}>Register</Button>
            </FormControl>
        </div>
    )
}

export default Register
