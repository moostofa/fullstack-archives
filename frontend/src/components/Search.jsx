import React, { useState, useEffect } from 'react'

const FIELDS = {
    id: {
        books: "",
        anime: "",
        manga: ""
    },
    title: {
        books: "",
        anime: "",
        manga: ""
    },
    description: {
        books: "",
        anime: "",
        manga: ""
    },
    imgSrc: {
        books: "",
        anime: "",
        manga: ""
    },
    genres: {
        books: "",
        anime: "",
        manga: ""
    },
    author: {
        books: ""
    },
    pages: {
        books: "",
    },
    episodes: {
        anime: ""
    },
    status: {
        anime: "",
        manga: ""
    }
}

const limit = 20
const urls = {
    Books: q => `https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=${limit}`,
    Anime: q => `https://api.aniapi.com/v1/anime?title=${q}&per_page=${limit}`,
    Manga: q => `https://api.mangadex.org/manga?title=${q}&limit=${limit}`
}

const getSearchData = {
    Books: res => res.items,
    Anime: res => res.data.documents,
    Manga: res => res.data
}

const SUBJECTS = {
    Books: {
        url: q => `https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=${limit}`,
        getSearchData: res => res.items,
        fields: () => ["id", "title", "description", "imgSrc", "genres", "author", "pages"]
    },
    Anime: {
        url: q => `https://api.aniapi.com/v1/anime?title=${q}&per_page=${limit}`,
        getSearchData: res => res.data.documents,
        fields: () => ["id", "title", "description", "imgSrc", "genres", "episodes", "status"]
    },
    Manga: {
        url: q => `https://api.mangadex.org/manga?title=${q}&limit=${limit}`,
        getSearchData: res => res.data,
        fields: () => ["id", "title", "description", "imgSrc", "genres", "status"]
    }
}

const Search = props => {
    const [state, setstate] = useState("")

    useEffect(() => {
        performSearch()
    })

    const performSearch = async () => {
        const response = await fetch(urls[props.subject](props.q))
        const json = await response.json()
        const data = getSearchData[props.subject](json)
        console.log(data)
    }

    return (
        <div>
            Completed search
        </div>
    )
}

export default Search
