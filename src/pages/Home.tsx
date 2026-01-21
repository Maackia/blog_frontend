import React from "react";
import { Heart, MessageCircle, Bookmark } from "lucide-react";

const DUMMY_POSTS = [
    {
        id: 1,
        title: "Understanding React Server Components",
        summary:
            "React Server Components allow you to write UI that can be rendered on the server. This means you can use the same language and framework for both client and server code.",
        author: "Sarah Drasner",
        date: "Oct 24, 2023",
        readTime: "5 min read",
        tags: ["React", "Web Development"],
        image: "https://placehold.co/600x400/e2e8f0/1e293b?text=React",
    },
    {
        id: 2,
        title: "The Future of CSS in JS",
        summary:
            "With the rise of server-side rendering and static site generation, the landscape of CSS in JS is changing. Lets explore what the future holds.",
        author: "Josh Comeau",
        date: "Oct 22, 2023",
        readTime: "7 min read",
        tags: ["CSS", "Frontend"],
        image: "https://placehold.co/600x400/e2e8f0/1e293b?text=CSS",
    },
    {
        id: 3,
        title: "TypeScript Best Practices for 2024",
        summary:
            "TypeScript continues to evolve. Here are some of the best practices you should be following in your projects this coming year.",
        author: "Matt Pocock",
        date: "Oct 20, 2023",
        readTime: "10 min read",
        tags: ["TypeScript", "Coding"],
        image: "https://placehold.co/600x400/e2e8f0/1e293b?text=TS",
    },
    {
        id: 4,
        title: "My Daily Routine as a Remote Developer",
        summary:
            "Working remotely offers flexibility but requires discipline. Here is how I structure my day to stay productive and healthy.",
        author: "Alex Chen",
        date: "Oct 18, 2023",
        readTime: "4 min read",
        tags: ["Lifestyle", "Remote Work"],
        image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Remote",
    },
];

const Home: React.FC = () => {
    return (
        <div className="space-y-6">
            {/* Create Post Input Placeholder */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                    <button className="flex-grow text-left text-gray-500 bg-gray-50 hover:bg-gray-100 rounded-lg px-4 py-2 transition-colors">
                        What's on your mind?
                    </button>
                </div>
            </div>

            {/* Feed Filter */}
            <div className="flex items-center space-x-4 mb-4">
                <button className="text-gray-900 font-bold text-lg">
                    Relevant
                </button>
                <button className="text-gray-500 hover:text-gray-700 font-medium">
                    Latest
                </button>
                <button className="text-gray-500 hover:text-gray-700 font-medium">
                    Top
                </button>
            </div>

            {/* Posts List */}
            <div className="space-y-4">
                {DUMMY_POSTS.map((post) => (
                    <article
                        key={post.id}
                        className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                    >
                        {post.image && (
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <div className="p-5">
                            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                                <span className="font-medium text-gray-900">
                                    {post.author}
                                </span>
                                <span>•</span>
                                <span>{post.date}</span>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600">
                                {post.title}
                            </h2>

                            <p className="text-gray-600 mb-4 line-clamp-3">
                                {post.summary}
                            </p>

                            <div className="flex items-center justify-between">
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-sm text-gray-600 hover:bg-gray-100 px-2 py-1 rounded"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="text-xs text-gray-500">
                                    {post.readTime}
                                </div>
                            </div>

                            <div className="mt-4 flex items-center gap-4 text-sm text-gray-500 border-t pt-4">
                                <button className="flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded transition-colors group">
                                    <Heart className="w-4 h-4 group-hover:text-red-500" />{" "}
                                    <span>Like</span>
                                </button>
                                <button className="flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded transition-colors group">
                                    <MessageCircle className="w-4 h-4 group-hover:text-blue-500" />{" "}
                                    <span>Comment</span>
                                </button>
                                <button className="flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded ml-auto transition-colors group">
                                    <Bookmark className="w-4 h-4 group-hover:text-yellow-500" />{" "}
                                    <span>Save</span>
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Home;
