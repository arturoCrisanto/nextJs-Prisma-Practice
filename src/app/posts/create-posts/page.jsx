import { createPost } from "@/actions/actions";

export default function CreatePostPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-8">
            <div className="w-full max-w-md shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-6">Create New Post</h1>
                
                <form action={createPost} className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-200"
                            placeholder="Enter post title"
                        />
                    </div>

                    <div>
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                            Content
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            rows={6}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-200"
                            placeholder="Enter post content (optional)"
                        />
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="published"
                            name="published"
                            className="h-4 w-4 text-amber-500 focus:ring-amber-200 border-amber-200 rounded"
                        />
                        <label htmlFor="published" className="ml-2 block text-sm text-gray-700">
                            Publish immediately
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gray-300 hover:bg-amber-200 text-black font-semibold py-2 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Create Post
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <a 
                        href="/posts" 
                        className="text-white hover:text-amber-200 text-sm"
                    >
                        ← Back to Posts
                    </a>
                </div>
            </div>
        </main>
    );
}