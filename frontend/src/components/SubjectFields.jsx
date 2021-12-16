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
        Manga: obj => `NOT imgSrc - imgSrc ID (need to perform 1 more step) ${obj.relationships.filter(relation => relation["type"] === "cover_art")[0].id}`
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