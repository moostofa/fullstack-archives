import React, { useState } from 'react'
import Search from '../routes/Search'
import { TextField, Button } from '@mui/material'

/*
    Renders a search form for a book, anime, or manga.
    On form submit, calls the Search component to get and display search results.

    Component is called in ../routes/Subjects.

    props:
    - props.subject: "Book", "Anime", or "Manga"
*/
const SearchForm = (props) => {
    const [state, setstate] = useState({
        "q": "",
        "results": ""
    })

    // perform a search on form submission
    const performSearch = event => {
        event.preventDefault()
        const q = event.target.q.value

        if (q.trim() === "") {
            setstate({
                q: "Please enter a title to search for."
            })
            return
        }
        setstate({
            "q": `Search results for "${q}"`,
            "results":  <Search subject={props.subject} q={q} />
        })
    }
    return (
        <div>
            <div>
                <h1>{props.subject}</h1>
                <form onSubmit={performSearch}>
                    <TextField 
                        size='small'
                        autoFocus
                        name='q'
                        placeholder={`${props.subject} title`}
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
                <h1> {state["q"]} </h1>
                <div> {state["results"]} </div>
            </div>
        </div>
    )
}

export default SearchForm
