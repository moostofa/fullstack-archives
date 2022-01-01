import React, { useState } from 'react'
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material/'
import { SUBJECTS } from '../helpers/SubjectMethods'

// return a select menu which allows users to add an item to their various lists
const Actions = props => {
    const [state, setstate] = useState("")
    const actionsList = Object.entries(SUBJECTS[props.subject].actions)

    // later change this to indicate that an item has been added to the user's list
    const handleChange = event => {
        setstate(event.target.value)
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
                    value={state}
                    label="Add to my list"
                    onChange={handleChange}
                > {
                    actionsList.map(([key, value], index) => (
                        <MenuItem key={index} value={key}>{value}</MenuItem>
                    ))
                }</Select>
            </FormControl>
        </Box>
    )
}

export default Actions
