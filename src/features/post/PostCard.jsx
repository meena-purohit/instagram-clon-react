import { useState } from "react";

function PostCard({username, userImage, postImage, caption }) {

    const [liked, setLiked] = useState(false)
    return(
         <div className="bg-white rounded-xl shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-3 p-4">
                <img src={userImage} 
                alt={username} 
                className="w-10 h-10 rounded-full hover:scale-125 transition"
                />

                <p className="font-semibold">{username}</p>
            </div>

            <img 
            src={postImage}
            alt="post" 
            className="w-full"
            />
            <div className="flex justify-between px-4 py-2">
                <div className="flex gap-4">
                    <button onClick={()=> setLiked(!liked)}>
                        {liked? "❤️" : "🤍"}
                    </button>
                    <span>💬</span>
                    <span>📤</span>
                </div>
                <span>🔖</span>
            </div>

            <div className="px-4 pb-4">
                <p>
                    <span className="font-semibold">
                        {username}
                    </span>{" "}
                    {caption}
                </p>
            </div>

    </div>
    )
}
export default PostCard;