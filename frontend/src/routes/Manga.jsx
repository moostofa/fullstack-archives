import React, { useState, useEffect } from 'react'

const getFields = mangaObject => {
    return {
        "id": mangaObject.id,
        "title": mangaObject.attributes.title.en,
        "description": mangaObject.attributes.description.en,
        "status": mangaObject.attributes.status,
        "imgSrc": (async () => await getMangaCoverImg(mangaObject.id, mangaObject.relationships))(),
        "tags": mangaObject.attributes.tags.map(tag => (
            tag.attributes.name.en
        ))
    }
}

const getMangaCoverImg = async (mangaId, relationshipsArray) => {
    let coverImgId = ""
    relationshipsArray.forEach(relationship => {
        if (relationship.type === "cover_art")
            coverImgId = relationship.id
    })

    let response = await fetch(`https://api.mangadex.org/cover/${coverImgId}`);
    let json = await response.json();
    console.log(json.data.attributes.fileName)
    return json.data.attributes.fileName
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
            manga.forEach(element => {
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

export default Manga
