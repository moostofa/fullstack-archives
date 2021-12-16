import React, { useState } from 'react'
import Search from '../routes/Search'

const SearchForm = (props) => {
    const [state, setstate] = useState({
        "q": "",
        "results": ""
    })

    const performSearch = event => {
        event.preventDefault()
        const q = event.target.q.value
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
                    <input autoFocus name='q' type="text" placeholder={`${props.subject} title`} />
                    <input type="submit" value="Search" />
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
