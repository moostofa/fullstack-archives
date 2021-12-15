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
        fetch(`https://api.aniapi.com/v1/anime?title=${props.q}&per_page=20`)
        .then(response => response.json())
        .then(json => {
            const anime = json.data.documents
            console.log(anime)

            let results = []
            anime.forEach(anime => {
                results.push(getFields(anime))
            })
            setstate(results)
        })
    }, [props.q])

    return (
        <div> {
            state.map((item, index) => (
                <ul key={index}> {
                    Object.entries(item).map(([key, value]) => (
                        <li key={`${index}-${key}`}>
                            {`${key}: ${value}`}
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    )
}

export default Anime
