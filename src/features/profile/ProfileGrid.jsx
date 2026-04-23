export default function ProfileGrid() {
    const posts = Array.from({length: 9 })
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2 p-2">
            {posts.map((_, index)=>(
                <img
                key={index}
                 src={`https://picsum.photos/300?random=${index}`}
                 alt="post"
                 className="aspect-square object-cover hover:scale-110 transition"
                 />
            ))}
        </div>
    )
}