import axios from "axios"

export const fetchExploreImages = async ()=> {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos?_limit=18"
    )
    return response.data
}