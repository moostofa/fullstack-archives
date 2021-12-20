const limit = 20
const commonFields = ["id", "title", "description", "imgSrc", "genres"]
const lists = ["finished", "unfinished", "watchlist", "dropped"]
export const SUBJECTS = {
    Books: {
        url: q => `https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=${limit}`,
        getSearchData: res => res.items,
        fields: [...commonFields, "author", "pages"],
        color: "blanchedalmond",
        lists: lists
    },
    Anime: {
        url: q => `https://api.aniapi.com/v1/anime?title=${q}&per_page=${limit}`,
        getSearchData: res => res.data.documents,
        fields: [...commonFields, "episodes"],
        color: "lavender",
        lists: lists
    },
    Manga: {
        url: q => `https://api.Mangadex.org/manga?title=${q}&limit=${limit}`,
        getSearchData: res => res.data,
        fields: [...commonFields, "status"],
        color: "lightblue",
        lists: lists
    }
}