import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material/'
import { SUBJECTS } from '../helpers/SubjectMethods'

// return a select menu which allows users to add an item to their various lists
const Actions = props => {
    const [selectedList, setselectedList] = useState("")
    const isAuthenticated = localStorage.getItem("token") !== null
    const actionsList = Object.entries(SUBJECTS[props.subject].actions)

    // later change this to indicate that an item has been added to the user's list
    const handleChange = event => {
        setselectedList(event.target.value)
    }

    const performAction = async () => {
        if (!isAuthenticated) {
            window.location.replace("/accounts/login")
            return
        }
        const response = await fetch("/api/add", {
            method: "post",
            body: JSON.stringify({
                item_id: props.id,
                subject: props.subject,
                field_add: selectedList
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem("token")}`
            }
        })

        const json = await response.json()

        if (json.success) alert(json.message)
    }

    return (
        <Box 
            display="flex" 
            width={1} height={1} 
            alignItems="center"
            justifyContent="center"
        >
            <FormControl sx={{width: 0.7}}>
                <InputLabel id="action-list">Add to my list</InputLabel>
                <Select 
                    labelId='action-list'
                    value={selectedList}
                    label="Add to my list"
                    onChange={handleChange}
                > {
                    actionsList.map(([key, value], index) => (
                        <MenuItem key={index} value={key}>{value}</MenuItem>
                    ))
                }</Select>
                {
                    selectedList !== "" 
                    &&
                    <Button
                        sx={{mx: "auto", my: 1}} 
                        variant='contained'
                        onClick={performAction}
                    >
                        { isAuthenticated ? "Add" : "Login to add" }
                    </Button>
                }
            </FormControl>
        </Box>
    )
}

export default Actions
