import React, { useState, useEffect } from 'react'

const Search = () => {
    const [state, setstate] = useState([])

    const searchBooks = () => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=the+mortality+doctrine")
        .then(response => response.json())
        .then(json => {
            const books = json.items
            const ids = books.map(book => (
                book["id"]
            ))
            setstate(ids)
        })
    }

    useEffect(() => {
        searchBooks()
    }, [])

    return (
        <div>
            <ul>
                {
                    state.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Search
