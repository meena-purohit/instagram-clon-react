import axios from "axios"

const API_URL =
  "https://jsonplaceholder.typicode.com/photos?_limit=5"

export const fetchPosts = async () => {

  const response = await axios.get(API_URL)

  return response.data

}