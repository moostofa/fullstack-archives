import React, { useState, useEffect } from 'react'

const FIELDS = {
    id: {
        Books: obj => obj.id,
        Anime: obj => obj.id,
        Manga: obj => obj.id
    },
    title: {
        Books: obj => obj.volumeInfo.title,
        Anime: obj => obj.titles.en,
        Manga: obj => obj.attributes.title.en
    },
    description: {
        Books: obj => obj.volumeInfo.description,
        Anime: obj => obj.descriptions.en,
        Manga: obj => `${obj.attributes.description.en.split(" ").slice(0, 20).join(" ")}...`
    },
    imgSrc: {
        Books: obj => {
            let src
            try { src = obj.volumeInfo.imageLinks.thumbnail } 
            catch(error) {}
            return src
        },
        Anime: obj => obj.cover_image,
        Manga: obj => `NOT imgSrc - imgSrc ID (need to perform 1 more step) ${obj.relationships.filter(relation => relation["type"] === "cover_art")[0].id}`
    },
    genres: {
        Books: obj => {
            let category
            try { category = obj.volumeInfo.categories[0] }
            catch(error) {}
            return category
        },
        Anime: obj => obj.genres.slice(0, 5),
        Manga: obj => obj.attributes.tags.map(tag => tag.attributes.name.en).slice(0, 5)
    },
    author: {
        Books: obj => obj.volumeInfo.authors[0]
    },
    pages: {
        Books: obj => obj.volumeInfo.pageCount,
    },
    episodes: {
        Anime: obj => obj.episodes_count
    },
    status: {
        Manga: obj => obj.attributes.status
    }
}

const limit = 20
const commonFields = ["id", "title", "description", "imgSrc", "genres"]
const SUBJECTS = {
    Books: {
        url: q => `https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=${limit}`,
        getSearchData: res => res.items,
        fields: () => [...commonFields, "author", "pages"]
    },
    Anime: {
        url: q => `https://api.aniapi.com/v1/anime?title=${q}&per_page=${limit}`,
        getSearchData: res => res.data.documents,
        fields: () => [...commonFields, "episodes"]
    },
    Manga: {
        url: q => `https://api.Mangadex.org/manga?title=${q}&limit=${limit}`,
        getSearchData: res => res.data,
        fields: () => [...commonFields, "status"]
    }
}

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
                itemDetails[field] = FIELDS[field][props.subject](item)
            })
            results.push(itemDetails)
        })
        console.log(results)
    }

    return (
        <div>
            Completed search
        </div>
    )
}

export default Search
