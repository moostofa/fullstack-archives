import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Anime from './Anime'
import Books from './Books'
import Manga from './Manga'

const CategoryOptions = {
    "books": <Books />,
    "anime": <Anime />,
    "manga": <Manga />
}

const Categories = () => {
    const [state, setstate] = useState("")
    const category = useParams().category

    useEffect(() => {
        setstate(
            Object.keys(CategoryOptions).includes(category) ? CategoryOptions[category]
            : <h1>The param {category} is invalid.</h1>
        )
    }, [category])

    return (
        <div> {state} </div>
    )
}

export default Categories
