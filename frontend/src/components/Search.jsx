import React, { useState, useEffect } from 'react'

const FIELDS = {
    id: {
        Books: obj => "",
        Anime: obj => "",
        Manga: obj => ""
    },
    title: {
        Books: obj => "",
        Anime: obj => "",
        Manga: obj => ""
    },
    description: {
        Books: obj => "",
        Anime: obj => "",
        Manga: obj => ""
    },
    imgSrc: {
        Books: obj => "",
        Anime: obj => "",
        Manga: obj => ""
    },
    genres: {
        Books: obj => "",
        Anime: obj => "",
        Manga: obj => ""
    },
    author: {
        Books: obj => ""
    },
    pages: {
        Books: obj => "",
    },
    episodes: {
        Anime: obj => ""
    },
    status: {
        Anime: obj => "",
        Manga: obj => ""
    }
}

const limit = 20
const commonFields = ["id", "title", "description", "imgSrc", "genres"]
const SUBJECTS = {
    Books: {
        url: q => `https://www.googleapis.com/Books/v1/volumes?q=${q}&maxResults=${limit}`,
        getSearchData: res => res.items,
        fields: () => [...commonFields, "author", "pages"]
    },
    Anime: {
        url: q => `https://api.aniapi.com/v1/Anime?title=${q}&per_page=${limit}`,
        getSearchData: res => res.data.documents,
        fields: () => [...commonFields, "episodes", "status"]
    },
    Manga: {
        url: q => `https://api.Mangadex.org/Manga?title=${q}&limit=${limit}`,
        getSearchData: res => res.data,
        fields: () => [...commonFields, "status"]
    }
}

const Search = props => {
    const [state, setstate] = useState(obj => "")

    useEffect(() => {
        performSearch()
    })

    const performSearch = async () => {
        const response = await fetch(SUBJECTS[props.subject].url(props.q))
        const json = await response.json()
        const data = SUBJECTS[props.subject].getSearchData(json)
        console.log(data)
        console.log(SUBJECTS[props.subject].fields())
    }

    return (
        <div>
            Completed search
        </div>
    )
}

export default Search
