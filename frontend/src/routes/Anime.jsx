import React, { useState, useEffect } from 'react'

const getFields = animeObject => {
    return {
        "id": animeObject["id"],
        "title": animeObject["titles"]["en"],
        "description": animeObject["descriptions"]["en"],
        "episodes": animeObject["episodes_count"],
        "imgSrc": animeObject["cover_image"],
        "genres": animeObject["genres"].slice(0, 5)
    }
}

const Anime = props => {
    const [state, setstate] = useState([])

    useEffect(() => {
        fetch(`https://api.aniapi.com/v1/anime?title=${props.q}`)
        .then(response => response.json())
        .then(json => {
            const anime = json.data.documents

            let results = []
            anime.forEach(element => {
                results.push(getFields(element))
            })
            setstate(results)
        })
    }, [props.q])

    return (
        <div> {
            JSON.stringify(state[0])
        }
        </div>
    )
}

export default Anime
