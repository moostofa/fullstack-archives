import React, { useState } from 'react'
import Anime from '../routes/Anime'
import Books from '../routes/Books'
import Manga from '../routes/Manga'

const searchSubjects = {
    Books: (q) => <Books q={q} />,
    Anime: (q) => <Anime q={q} />,
    Manga: (q) => <Manga q={q} />
}

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
            "results": searchSubjects[props.subject](q)
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
                <div>
                    {state["results"]}
                </div>
            </div>
        </div>
    )
}

export default SearchForm
