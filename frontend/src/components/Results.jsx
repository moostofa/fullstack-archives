import React from 'react'
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Paper } from '@mui/material/'
import { SUBJECTS } from './SubjectMethods'


// props.results = an array of objects (results)
const Results = props => {
    return (
        <Grid container alignItems="center" justifyContent="center" gap={1}> {
            props.results.map((item, index) => (
                <Paper key={index} elevation={8} sx={{backgroundColor: SUBJECTS[props.subject].color, width: "0.9"}}>
                    <Grid container>
                        <Grid item xs={4}>
                            <img src={item.imgSrc} alt={item.title}/>
                        </Grid>
                        <Grid item xs={4}>
                            {item.title}
                        </Grid>
                        <Grid item xs={4}>
                            <Box 
                                display="flex" 
                                width={1} height={1} 
                                alignItems="center"
                                justifyContent="center"
                            >
                                <FormControl sx={{width: 0.5}}>
                                    <InputLabel id="demo-simple-select-label">Add to my list</InputLabel>
                                    <Select labelId='demo-simple-select-label'> {
                                        SUBJECTS[props.subject].lists.map((list, index) => (
                                            <MenuItem key={index}>{list}</MenuItem>
                                        ))
                                    }</Select>
                                </FormControl>
                            </Box>
                        </Grid> 
                    </Grid>
                </Paper>
            ))
        }</Grid>
    )
}

export default Results
