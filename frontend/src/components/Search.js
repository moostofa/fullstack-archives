import React, { useState, useEffect } from 'react'

const Search = () => {
    const [state, setstate] = useState({"items": []})

    const searchBooks = () => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=the+mortality+doctrine")
        .then(response => response.json())
        .then(json => {
            const books = json.items

            let items = []
            books.forEach(book => {
                const fields = {
                    "id": book.id,
                    "title": book.volumeInfo.title,
                    "author": book.volumeInfo.authors[0],
                    "pageCount": book.volumeInfo.pageCount,
                    "description": book.volumeInfo.description
                }
                items.push(fields)
            });
            setstate({"items": items})
        })
    }

    useEffect(() => {
        searchBooks()
    }, [])

    return (
        <div>{
            state["items"].map(element => (
                <li key={element.id}>{element.title}</li>
            ))
        }
        </div>
        /*
        <div>
            <ul>{
                state.items.map((element, index) => (
                    <li key={element.id}>
                    <ul>{
                        Object.entries(element).forEach(([key, value]) => {
                            <li key={key}>{value}</li>
                        })}
                    </ul>
                    </li>
                ))}
            </ul>
        </div>
        */
    )
}

export default Search