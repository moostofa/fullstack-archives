import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import SearchForm from '../components/SearchForm'

const CategoryOptions = ["books", "anime", "manga"]

const Categories = () => {
    const [state, setstate] = useState("")
    const category = useParams().category

    // check if the url param is valid - if so, render a search form for that component (component can be book, anime, or manga)
    useEffect(() => {
        setstate(
            CategoryOptions.includes(category)
            ? <SearchForm 
                subject = {category.charAt(0).toLocaleUpperCase() + category.slice(1)} 
              />
            : <h1>A "{category}" item cannot be searched.</h1>
        )
    }, [category])

    return (
        <div> {state} </div>
    )
}

export default Categories
