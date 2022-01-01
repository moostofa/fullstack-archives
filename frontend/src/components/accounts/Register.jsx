import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, FormControl, FormHelperText, TextField } from '@mui/material'

const Register = () => {
    // [0] is the value of the controlled TextField component
    // [1] is a boolean value indicating whether the TextField should display an error text or not
    const [credentials, setcredentials] = useState({
        username: ["", false],
        password: ["", false],
        passwordConfirm: ["", false]
    })

    // helper texts to give feedback to user if their input is invalid
    const [helperText, setHelperText] = useState({
        form: "",
        username: "Username is already taken.",
        password: "Passwords do not match.",
        passwordConfirm: "Passwords do not match."
    })

    // stores a list of usernames that are already taken
    const [usernames, setUsernames] = useState([])
    
    const redirect = useNavigate()

    // when components mounts, load and save all current usernames in state
    useEffect(() => {
        getUsernames()
    }, [])

    const getUsernames = async () => {
        const response = await fetch("/auth/usernames")
        const users = await response.json()
        setUsernames(users)
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
        const username = credentials.username
        const password = credentials.password
        const passwordConfirm = credentials.passwordConfirm

        // fields cannot be empty
        if (username[0].trim() === "" || password[0].trim() === "" || passwordConfirm[0].trim() === "") {
            setHelperText({
                ...helperText,
                form: "Please fill in the form fields."
            })
            return
        }

        // prevent submit if any form field is invalid
        if (username[1] || password[1] || passwordConfirm[1]) return

        // validate password match
        if (password[0] !== passwordConfirm[0]) {
            setcredentials({
                ...credentials,
                password: [password[0], true],
                passwordConfirm: [passwordConfirm[0], true]
            })
            return
        }

        // register the user by sending POST data to api
        const response = await fetch("/auth/register", {
            method: "POST",
            body: JSON.stringify({
                username: username[0],
                password: password[0],
                password_confirm: passwordConfirm[0]
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
        })
        const result = await response.json()

        // temporary error catch
        if (!result.success) return alert("Registration failed - Response returned 'success': False. An error was unaccounted for on client-side.")

        // save user's auth token & redirect to index page
        localStorage.removeItem("token")
        localStorage.setItem("token", result.token)
        redirect("/")
    }

    return (
        <div>
            <h1>Register</h1>
            <FormControl> 
                <FormHelperText> {helperText.form} </FormHelperText> {
                Object.keys(credentials).map(key => (
                    <TextField 
                        key={key}
                        name={key}
                        value={credentials[key][0]}
                        error={credentials[key][1]}
                        label={
                            key === "username" ? "Username"
                            : key === "password" ? "Password"
                            : "Confirm password"
                        }
                        type={key[0] === "p" ? "password" : "text"}
                        size='small'
                        onChange={handleChange}
                        sx={{my: 1}}
                        helperText={credentials[key][1] ? helperText[key] : ""}
                    />
                ))}
                <Button type='submit' variant='contained' onClick={handleRegistration}>Register</Button>
            </FormControl>
        </div>
    )
}

export default Register
