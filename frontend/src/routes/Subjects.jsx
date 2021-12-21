import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import SearchForm from '../components/search/SearchForm'

const subjectOptions = ["books", "anime", "manga"]

/*
    Returns a search form for a book, anime or manga. 
    If any another param is passed in the url, it cannot be searched for, and feedback is provided to the user.
*/
const Subjects = () => {
    const [state, setstate] = useState("")
    const subject = useParams().subject

    useEffect(() => {
        setstate(
            subjectOptions.includes(subject) ? 
            <SearchForm 
                subject = {subject.charAt(0).toLocaleUpperCase() + subject.slice(1)} 
            />
            : <h1>A "{subject}" item cannot be searched for.</h1>
        )
    }, [subject])
    return state
}

export default Subjects
