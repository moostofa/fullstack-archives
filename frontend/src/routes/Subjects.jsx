import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import SearchForm from '../components/SearchForm'

const subjectOptions = ["books", "anime", "manga"]

const Subjects = () => {
    const [state, setstate] = useState("")
    const subject = useParams().subject

    useEffect(() => {
        setstate(
            subjectOptions.includes(subject)
            ? <SearchForm 
                subject = {subject.charAt(0).toLocaleUpperCase() + subject.slice(1)} 
              />
            : <h1>A "{subject}" item cannot be searched for.</h1>
        )
    }, [subject])

    return (
        <div> {state} </div>
    )
}

export default Subjects