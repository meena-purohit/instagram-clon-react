import { useEffect, useState } from "react"

export default function CommentSection({ postId }) {

    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])

    useEffect(() => {

        const savedComments = localStorage.getItem(`comments-${postId}`)
        if (savedComments) {
            setComments(JSON.parse(savedComments))
        }
    },[postId])

    const handleAddComment = () => {

    if (!comment.trim()) return

    const updatedComments = [...comments, comment]

    setComments(updatedComments)

    localStorage.setItem(
      `comments-${postId}`,
      JSON.stringify(updatedComments)
    )

    setComment("")
  }

    return(
        <div>

           {/* comment list  */}
           <p className="text-xs text-gray-500 mb-1">
            {comments.length} comments
           </p>
            {comments.map((c, index) =>(
                <p key={index} className="text-sm">
                    <span className="font-semibold">  user </span>
                    {c}
                </p>
            ))}

            {/* input row */}
            <div className="flex gap-2 mt-2">
                <input 
                type="text"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onKeyDown={(e)=> {
                    if (e.key === "Enter") {
                        handleAddComment()
                    }
                }}
                className="flex-1 border rounded px-2 py-1 text-sm"
                />
                <button 
                onClick={handleAddComment}
                className="text-blue-500 font-semibold"
                >
                     Post
                </button>
            </div>
        </div>
    )
}