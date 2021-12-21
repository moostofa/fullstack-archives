import React from 'react'
import { Grid, Paper } from '@mui/material/'
import { SUBJECTS } from './SubjectMethods'
import Actions from './Actions'


// props.results = an array of objects (results)
// display the results of the search
const Results = props => {
    return (
        <Grid container alignItems="center" justifyContent="center" gap={1}> {
            props.results.map((item, index) => (
                <Paper key={index} elevation={8} sx={{backgroundColor: SUBJECTS[props.subject].color, width: "0.9"}}>
                    <Grid container>
                        <Grid item xs={2}>
                            <img width={150} src={item.imgSrc} alt={item.title}/>
                        </Grid>
                        <Grid item xs={7}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <b> {
                                item.pages ? `Number of pages: ${item.pages}` : 
                                item.episodes ? `Number of episodes: ${item.episodes}` : ""
                            }</b>
                            <p>Categories: {item.genres}</p>
                        </Grid>
                        <Grid item xs={3}>
                            <Actions id={item.id} subject={props.subject} />
                        </Grid> 
                    </Grid>
                </Paper>
            ))
        }</Grid>
    )
}

export default Results
