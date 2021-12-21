import React from 'react'
import { Grid, Paper } from '@mui/material/'
import { SUBJECTS } from '../components/helpers/SubjectMethods'

const IndexPage = () => {
    const subjects = ["Books", "Anime", "Manga"]
    return (
        <Grid 
            container 
            alignItems="center" 
            justifyContent="center" 
            gap={1} 
            marginTop={5}
        >{
            subjects.map((subject, index) => (
                <Paper 
                    key={index} 
                    elevation={4} 
                    sx={{
                        backgroundColor: SUBJECTS[subject].color, 
                        width: 0.9
                    }}>
                        <h1>{subject}</h1>
                </Paper>
            ))
        }</Grid>
    )
}

export default IndexPage
