import { useEffect, useState } from "react";
import Modal from "../../components/Modal";

function PostCard({username, userImage, postImage, caption }) {

    const [liked, setLiked] = useState(false)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {

  if (!showModal) return

  const handleEscape = (e) => {
    if (e.key === "Escape") {
      setShowModal(false)
    }
  }

  window.addEventListener("keydown", handleEscape)

  return () => {
    window.removeEventListener("keydown", handleEscape)
  }

}, [showModal])
    
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
            className="w-full cursor-pointer"
            onClick={()=> setShowModal(true)}
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
                    </span>{""}
                    {caption}
                </p>
            </div>
          {showModal && (
                <Modal onClose={()=> setShowModal(false)}>
                    <img
                  src={postImage}
                  alt="preview"
                  className="w-full rounded-lg"
                   />
                </Modal>
            )}  

    </div>
    )
}
export default PostCard;