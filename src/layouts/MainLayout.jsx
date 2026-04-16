import { Children } from "react";
import Navbar from "../components/Navbar";

export default function MainLayout({Children}) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="max-w-4xl mx-auto pt-6">
                {Children}
            </main>
        </div>
    )
}