import React, { useState, useEffect } from 'react'

const getFields = mangaObject => {
    return {
        "id": mangaObject.id,
        "title": mangaObject.attributes.title.en,
        "description": mangaObject.attributes.description.en,
        "status": mangaObject.attributes.status,
        "coverArtId": mangaObject.relationships.filter(relation => relation["type"] === "cover_art")[0].id,
        "tags": mangaObject.attributes.tags.map(tag => (
            tag.attributes.name.en
        ))
    }
}

const Manga = props => {
    const [state, setstate] = useState([])

    useEffect(() => {
        fetch(`https://api.mangadex.org/manga?title=${props.q}`)
        .then(response => response.json())
        .then(json => {
            const manga = json.data
            console.log(manga)

            let results = []
            manga.forEach((element, index) => {
                console.log(`relationships length: ${element.relationships.length}, element number: ${index + 1}`)
                results.push(getFields(element))
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

export default Manga
