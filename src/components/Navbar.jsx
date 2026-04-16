import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-4xl mx-auto flex justify-between items-center p-4">
                <h1 className="text-xl font-bold">
                    Instagram Clone
                </h1>
                <div className="flex gap-4">
                    <Link to="/">
                    Home
                    </Link>
                    <Link to="/explore">
                    Explore
                    </Link>
                    <Link to="/profile">
                    Profile
                    </Link>
                </div>
            </div>
        </nav>
    )
}