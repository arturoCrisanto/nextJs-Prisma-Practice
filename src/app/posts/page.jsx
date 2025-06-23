import { PrismaClient } from "@prisma/client"
import Link from "next/link"

const prisma = new PrismaClient()

export default async function page() {
      const posts = await prisma.post.findMany()
    
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="flex w-full max-w-4xl justify-center items-center mb-8 gap-20">
        <h1 className="text-4xl font-bold">Posts Page {posts.length}</h1>
        <Link href="/posts/create-posts" className="bg-gray-300 hover:bg-amber-200 text-black font-medium py-2 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Create New Post
        </Link>
      </div>
        <ul className="mt-4 flex flex-col w-full max-w-lg">
            {posts.map((post) => (
              <li key={post.id} className="mb-2 gap-4 p-4 border-b">
                <Link href={`/posts/${post.slug}`} className="hover:text-amber-200">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                </Link>
                   
              </li>
            ))}
        </ul>
      </main>
  )
}

