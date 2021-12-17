import React, { useState, useEffect } from 'react'
import { Button, Grid, Paper } from '@mui/material/'
import { FIELDS } from '../components/SubjectFields'
import { SUBJECTS } from '../components/SubjectMethods'

/*
    Perform a search based on the query paramter(s) passed into the component, or url.

    Component is called in ../components/SearchForm, when the search form is submitted.

    props:
    - props.q = the title being searched for
    - props.subject = the book, anime, or manga API being queried
*/
const Search = props => {
    const [state, setstate] = useState([{}])

    useEffect(() => {
        performSearch()
    }, [props.q])

    const performSearch = async () => {
        // fetch the data and access the actual array of results from the response
        const response = await fetch(SUBJECTS[props.subject].url(props.q))
        const json = await response.json()
        const data = SUBJECTS[props.subject].getSearchData(json)
        console.log(data)

        const results = []
        const itemFields = SUBJECTS[props.subject].fields()

        // data is the array of results returned by the API
        data.forEach(item => {
            const itemDetails = {}
            itemFields.forEach(field => {
                try {
                    itemDetails[field] = FIELDS[field][props.subject](item)
                } catch(error) {
                    itemDetails[field] = ""
                }
            })
            results.push(itemDetails)
        })
        setstate(results)
    }

    return (
        <Grid container gap={1}> {
            state.map((item, index) => (
                <Paper elevation={8} sx={{backgroundColor: 'blanchedalmond'}}>
                    <Grid key={index} container>
                        <Grid item xs={4}>
                            <img src={item.imgSrc} alt={item.title}/>
                        </Grid>
                        <Grid item xs={4}>
                            {JSON.stringify(item)}
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant='contained'>Add to list</Button>
                        </Grid> 
                    </Grid>
                </Paper>
            ))
        }
        </Grid>
    )
}

export default Search
