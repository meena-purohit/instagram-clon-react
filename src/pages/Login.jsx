import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

function Login() {

  const [username, setUsername] = useState("")

  const { login } = useAuth()

  const navigate = useNavigate()


  const handleLogin = () => {

    if (!username.trim()) return

    login(username)

    navigate("/")
  }


  return (

    <div className="flex justify-center items-center min-h-[60vh]">

      <div className="bg-white shadow rounded-xl p-6 w-80">

        <h2 className="text-lg font-semibold mb-4">
          Login
        </h2>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border w-full px-3 py-2 rounded"
        />

        <button
          onClick={handleLogin}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>

      </div>

    </div>
  )
}

export default Login