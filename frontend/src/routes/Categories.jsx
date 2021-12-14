import { useParams } from "react-router-dom"

import React from 'react'

const Categories = () => {
    const params = useParams()
    return (
        <div>
            <h1>This is the manga search page</h1>
            <h3>Params: {params.category}</h3>
        </div>
    )
}

export default Categories
