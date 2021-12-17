/*
    A an object containing functions used to retrieve fields of interest for certain search items.
    This is used in the Search component.

    The object fields are described in each of the object's respective API's documentation.

    params:
    - obj is the book, anime, or manga object retrieved from a fetch() request.
*/
export const FIELDS = {
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
        Books: obj => obj.volumeInfo.imageLinks.thumbnail,
        Anime: obj => obj.cover_image,
        Manga: obj => obj.relationships.filter(relation => relation["type"] === "cover_art")[0].id
    },
    genres: {
        Books: obj => obj.volumeInfo.categories[0],
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