import React, { useState, useEffect } from 'react'
import { Button, TextField } from '@mui/material'

import Search from '../routes/Search'

/*
    Renders a search form for a book, anime, or manga.
    On form submit, calls the Search component to get and display search results.

    Component is called in ../routes/Subjects.

    props:
    - props.subject: "Book", "Anime", or "Manga"
*/
const SearchForm = (props) => {
    const [state, setstate] = useState({
        q: "",
        feedback: "",
        results: ""
    })

    // empty the search bar & results whenever the search subject changes (via url, or navbar)
    useEffect(() => {
        setstate({
            q: "",
            feedback: "",
            results: ""
        })
    }, [props.subject])

    // perform a search on form submission
    const performSearch = event => {
        event.preventDefault()
        const q = event.target.q.value

        // check if user entered a search term
        if (q.trim() === "") {
            setstate({
                ...state,
                feedback: "Please enter a title to search for."
            })
            return
        }

        // fetch & display results
        setstate({
            ...state,
            feedback: `Search results for "${q}"`,
            results: <Search subject={props.subject} q={q} />
        })
    }

    const qChange = (event) => {
        setstate({
            ...state,
            q: event.target.value
        })
    }

    return (
        <div>
            <div>
                <h1>{props.subject}</h1>
                <form onSubmit={performSearch}>
                    <TextField 
                        autoFocus
                        label={`${props.subject} title`}
                        name='q'
                        onChange={qChange}
                        size='small'
                        value={state.q}
                    />
                    <Button 
                        type='submit' 
                        variant='contained'
                    >
                        Search
                    </Button>
                </form>
            </div>
            <div>
                <h1> {state.feedback} </h1>
                <div> {state.results} </div>
            </div>
        </div>
    )
}

export default SearchForm
