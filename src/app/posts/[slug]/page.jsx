import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function Page({ params }) {
    const { slug } = params
    const post = await prisma.post.findUnique({
        where: {
            slug: slug
        }
    })

    if (!post) {
        return (
            <main className="flex flex-col items-center justify-center p-24">
                <h1 className="text-4xl font-bold">Post Not Found</h1>
                <p className="text-gray-600 mt-4">The post you're looking for doesn't exist.</p>
            </main>
        )
    }

    return (
        <main className="flex flex-col items-center justify-between p-24">
            <article className="max-w-4xl w-full">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <div className="mb-4 flex">
                    <small className="text-gray-400 my-2">
                        Created: {new Date(post.createdAt).toLocaleDateString()}
                    </small>
                    {post.published ? (
                        <span className="text-green-500 ml-2 my-2text-sm font-semibold">Published</span>
                    ) : (
                        <span className="text-red-500 ml-2 my-2 text-sm font-semibold">Draft</span>
                    )}
                </div>
                {post.content && (
                    <div className="prose max-w-none">
                        <p className="text-white">{post.content}</p>
                    </div>
                )}
            </article>
        </main>
    );
}