import postData from "../features/post/postData";
import PostCard from "../features/post/PostCard"
import StoryList from "../features/story/StoryList";

export default function Home() {
    return(
        <div className="space-y-6">
            <StoryList />
           {postData.map((post)=> (
            <PostCard 
            key={post.id}
            username={post.username}
            userImage={post.userImage}
            postImage={post.postImage}
            caption={post.caption}
            />
           ))}
        </div>
    )
}