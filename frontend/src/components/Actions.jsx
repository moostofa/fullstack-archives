import React from 'react'
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material/'
import { SUBJECTS } from './SubjectMethods'

const Actions = props => {
    return (
        <Box 
            display="flex" 
            width={1} height={1} 
            alignItems="center"
            justifyContent="center"
        >
            <FormControl sx={{width: 0.5}}>
                <InputLabel id="action-list">Add to my list</InputLabel>
                <Select labelId='action-list'> {
                    SUBJECTS[props.subject].lists.map((list, index) => (
                        <MenuItem key={index}>{list}</MenuItem>
                    ))
                }</Select>
            </FormControl>
        </Box>
    )
}

export default Actions
