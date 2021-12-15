import React, { useState, useEffect } from 'react'

const getFields = bookObject => {
    return {
        "id": bookObject["id"],
        "title": bookObject["volumeInfo"]["title"],
        "author": bookObject["volumeInfo"]["authors"][0],
        "description": bookObject["volumeInfo"]["description"],
        "pages": bookObject["volumeInfo"]["pageCount"],
        //"imgSrc": bookObject["volumeInfo"]["imageLinks"]["smallThumbnail"],
        //"genres": bookObject["volumeInfo"]["categories"]
    }
}

const Books = props => {
    const [state, setstate] = useState([])

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${props.q}`)
        .then(response => response.json())
        .then(json => {
            const books = json.items
            console.log(books)

            let results = []
            books.forEach(book => {
                results.push(getFields(book))
            })
            setstate(results)
        })
    }, [props.q])

    return (
        <div> {
            state.map((item, index) => (
                <ul key={index}> {
                    Object.entries(item).map(([key, value]) => (
                        <li key={`${index}-${key}`}>
                            {`${key}: ${value}`}
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    )
}

export default Books
