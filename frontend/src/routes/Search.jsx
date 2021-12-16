import React, { useState, useEffect } from 'react'
import { FIELDS } from '../components/SubjectFields'
import { SUBJECTS } from '../components/SubjectMethods'

const Search = props => {
    const [state, setstate] = useState("")

    useEffect(() => {
        performSearch()
    })

    const performSearch = async () => {
        const response = await fetch(SUBJECTS[props.subject].url(props.q))
        const json = await response.json()
        const data = SUBJECTS[props.subject].getSearchData(json)
        console.log(data)

        const results = []
        const itemFields = SUBJECTS[props.subject].fields()

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
        console.log(results)
    }

    return (
        <div>
            Completed search. Look at console
        </div>
    )
}

export default Search
