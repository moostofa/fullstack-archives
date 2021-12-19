import React, { useState, useEffect } from 'react'
import { Button, TextField } from '@mui/material'
import { useSearchParams } from 'react-router-dom'

import Search from '../routes/Search'

const initialState = {
    helperText: "",
    searchDetails: "",
    results: ""
}

/*
    Renders a search form for a book, anime, or manga.
    On form submit, calls the Search component to get and display search results.

    Component is called in ../routes/Subjects.

    props:
    - props.subject: "Book", "Anime", or "Manga"
*/
const SearchForm = (props) => {
    const [state, setstate] = useState(initialState)
    const [searchParams, setSearchParams] = useSearchParams({
        title: ""
    })

    // reset state whenever the search subject changes (via url, or navbar)
    useEffect(() => {
        setstate(initialState)
    }, [props.subject])

    // perform a search on form submission
    const performSearch = event => {
        event.preventDefault()
        const title = searchParams.get("title")

        // check if user entered a valid search term
        if (title.trim() === "") {
            setstate({
                ...state,
                helperText: "Please enter a title to search for."
            })
            return
        }

        // fetch & display results
        setstate({
            helperText: "",
            searchDetails: `Search results for "${title}"`,
            results: <Search subject={props.subject} q={title} /> //
        })
    }

    // store the search term in state whenever it changes
    const titleChange = (event) => {
        setSearchParams({
            title: event.target.value
        })
    }
    return (
        <div>
            <div>
                <h1>{props.subject}</h1>
                <form onSubmit={performSearch}>
                    <TextField 
                        autoFocus
                        helperText={state.helperText}
                        label={`${props.subject} title`}
                        name='q'
                        onChange={titleChange}
                        size='small'
                        value={searchParams.get("title")}
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
                <h1> {state.searchTerm} </h1>
                <div> {state.results} </div>
            </div>
        </div>
    )
}

export default SearchForm
