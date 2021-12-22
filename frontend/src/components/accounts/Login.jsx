import React, { useState, useEffect } from 'react'

const Login = () => {
    const [state, setstate] = useState({})

    useEffect(() => {
        testAPI()
    }, [])

    const testAPI = async () => {
        const response = await fetch("/api/books")
        const json = await response.json()
        console.log(json)
        setstate(json)
    }

    return (
        <div>
            {JSON.stringify(state)}
        </div>
    )
}

export default Login
