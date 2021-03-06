import React, { useState, useEffect } from 'react'

import { FIELDS } from '../helpers/SubjectFields'
import { SUBJECTS } from '../helpers/SubjectMethods'
import Results from './Results'

/*
    Perform a search based on the query paramter(s) passed into the component, or url.

    Component is called in ../components/SearchForm, when the search form is submitted.

    props:
    - props.q = the title being searched for
    - props.subject = the book, anime, or manga API being queried
*/
const Search = props => {
    const [state, setstate] = useState([{}])

    useEffect(() => {
        performSearch()
    }, [props.q])

    const performSearch = async () => {
        // fetch the data and access the actual array of results from the response
        const response = await fetch(SUBJECTS[props.subject].url(props.q))
        const json = await response.json()
        const data = SUBJECTS[props.subject].getSearchData(json)

        const results = []
        const itemFields = SUBJECTS[props.subject].fields

        // data is the array of results returned by the API
        data.forEach(item => {
            const itemDetails = {}
            itemFields.forEach(field => {
                try {
                    itemDetails[field] = FIELDS[field][props.subject](item)
                } catch(error) {
                    itemDetails[field] = ""
                }
            })
            results.push(itemDetails)
        })
        setstate(results)
    }
    return <Results results={state} subject={props.subject} />
}

export default Search
