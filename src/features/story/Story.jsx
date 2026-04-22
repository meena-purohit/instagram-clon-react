function Story({ username, image }) {
  return (
    <div className="flex flex-col items-center cursor-pointer flex-shrink-0">

      <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">

        <img
          src={image}
          alt={username}
          className="w-full h-full rounded-full object-cover border-2 border-white"
        />

      </div>

      <p className="text-xs mt-1">{username}</p>

    </div>
  )
}

export default Story