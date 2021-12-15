import React, { useState } from 'react'
import Searchie from '../components/Searchie'

const Booksies = () => {
    const [state, setstate] = useState({
        "q": "",
        "results": ""
    })

    const performSearch = event => {
        event.preventDefault()
        setstate({
            "q": event.target.q.value,
            "results": <Searchie />
        })
    }

    return (
        <div>
            <form onSubmit={performSearch}>
                <input name='q' type="text" placeholder='Book title' />
                <input type="submit" value="Search" />
            </form>
            <p>The value of q: {state["q"]}</p>
            <h1>Results</h1>
            <div>
                {state.results}
            </div>
        </div>
    )
}

export default Booksies
