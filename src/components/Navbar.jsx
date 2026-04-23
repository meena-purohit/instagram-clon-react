import { NavLink } from "react-router-dom";
import { Home, Compass, User } from "lucide-react";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  const baseStyle =
    "flex flex-col items-center text-xs transition-transform duration-200";

  const activeStyle = "text-black font-semibold scale-110";

  const inactiveStyle = "text-gray-500";

  return (
    <nav className="bg-white shadow-sm sticky top-0 md:bottom-auto fixed md:relative w-full z-40">
      <div className="max-w-4xl mx-auto flex justify-around md:justify-between items-center px-4 py-2">
        {/* Logo */}

        <h1 className="text-lg font-bold">Instagram Clone {user && `| ${user.username}`}</h1>

        {/* Navigation Icons */}

        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            <Home size={22} />
            <span className="hidden md:block">Home</span>
          </NavLink>

          <NavLink
            to="/explore"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            <Compass size={22} />
            Explore
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            <User size={22} />
            Profile
          </NavLink>

          {user && (
            <button onClick={logout} className="text-xs text-red-500">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
