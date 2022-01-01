import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const redirect = useNavigate()
    useEffect(() => {
        localStorage.removeItem("token")
        redirect("/")
    }, [])
    return null
}

export default Logout
