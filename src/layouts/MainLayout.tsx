import React from "react";
import { Link } from "react-router-dom";
import {
    Search,
    Bell,
    Home,
    Flame,
    Hash,
    BookMarked,
    List,
    Mic,
    User,
} from "lucide-react";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center">
                        <Link
                            to="/"
                            className="text-xl font-bold text-gray-900 tracking-tight flex items-center gap-2"
                        >
                            <span className="bg-blue-600 text-white p-1 rounded-lg">
                                DB
                            </span>
                            <span>Daily Blog</span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
                            <span className="sr-only">Search</span>
                            <Search className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
                            <span className="sr-only">Notifications</span>
                            <Bell className="w-5 h-5" />
                        </button>
                        <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center text-gray-500 cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 transition-all">
                            <User className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Left Sidebar (Navigation) */}
                        <aside className="w-full lg:w-64 flex-shrink-0 hidden lg:block">
                            <div className="sticky top-24 space-y-4">
                                <nav className="bg-white rounded-lg shadow-sm p-4">
                                    <ul className="space-y-1">
                                        <li>
                                            <Link
                                                to="/"
                                                className="flex items-center px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors group"
                                            >
                                                <Home className="w-5 h-5 mr-3 group-hover:text-blue-600" />
                                                <span className="font-medium">
                                                    Home
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/popular"
                                                className="flex items-center px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors group"
                                            >
                                                <Flame className="w-5 h-5 mr-3 group-hover:text-blue-600" />
                                                <span className="font-medium">
                                                    Popular
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/tags"
                                                className="flex items-center px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors group"
                                            >
                                                <Hash className="w-5 h-5 mr-3 group-hover:text-blue-600" />
                                                <span className="font-medium">
                                                    Tags
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>

                                <div className="bg-white rounded-lg shadow-sm p-4">
                                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
                                        My Log
                                    </h3>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li>
                                            <Link
                                                to="#"
                                                className="flex items-center px-3 py-2 hover:bg-gray-50 rounded-md transition-colors"
                                            >
                                                <BookMarked className="w-4 h-4 mr-3 text-gray-400" />
                                                Reading List
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="flex items-center px-3 py-2 hover:bg-gray-50 rounded-md transition-colors"
                                            >
                                                <List className="w-4 h-4 mr-3 text-gray-400" />
                                                Listings
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="flex items-center px-3 py-2 hover:bg-gray-50 rounded-md transition-colors"
                                            >
                                                <Mic className="w-4 h-4 mr-3 text-gray-400" />
                                                Podcasts
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </aside>

                        {/* Center Column (Feed/Content) */}
                        <section className="w-full lg:flex-1 min-w-0">
                            {children}
                        </section>

                        {/* Right Sidebar (Widgets) */}
                        <aside className="w-full lg:w-80 flex-shrink-0 hidden xl:block">
                            <div className="sticky top-24 space-y-6">
                                {/* Widget 1 */}
                                <div className="bg-white rounded-lg shadow-sm p-4">
                                    <h3 className="font-bold text-gray-900 mb-4 px-1">
                                        Trending Now
                                    </h3>
                                    <div className="space-y-4">
                                        {[1, 2, 3].map((i) => (
                                            <div
                                                key={i}
                                                className="group cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
                                            >
                                                <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 leading-snug">
                                                    How to build a blog with
                                                    React and Tailwind CSS
                                                </h4>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    2 hours ago
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Widget 2 */}
                                <div className="bg-white rounded-lg shadow-sm p-4">
                                    <h3 className="font-bold text-gray-900 mb-4 px-1">
                                        Recommended Topics
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "React",
                                            "TypeScript",
                                            "Tailwind",
                                            "Design",
                                            "Life",
                                        ].map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-gray-200 cursor-pointer transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MainLayout;
