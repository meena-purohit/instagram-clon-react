
import PostCard from "../features/post/PostCard"
import StoryList from "../features/story/StoryList";
import { useEffect, useState } from "react";
import { fetchPosts } from "../services/postService";

export default function Home() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const loadPosts = async()=> {
            try {
                const data =await fetchPosts()
                console.log("API data", data);
                
                setPosts(data)
            } catch (err) {
                setError("Failed to load posts")
            } finally {
                setLoading(false)
            }
        }
        loadPosts()
    },[]) 

    if (loading) {
        return (
  <div className="p-4 animate-pulse">

    <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>

    <div className="h-64 bg-gray-300 rounded"></div>

  </div>
)
    }
    if (error) {
        return <p className="p-4 text-red-500">{error }</p>
    }


    return(
        <div className="space-y-6">
            <StoryList />
           {posts.map((post)=> (
            <PostCard
            key={post.id}
            username={`user_${post.id}`}
            userImage={`https://i.pravatar.cc/150?img=${post.id}`}
            postImage={`https://picsum.photos/500/400?random=${post.id}`}
            caption={post.title}
            />
           ))}
           
        </div>
    )
}