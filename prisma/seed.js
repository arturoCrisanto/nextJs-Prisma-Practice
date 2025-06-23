import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create five posts
  const posts = [
    {
      title: "Getting Started with Next.js",
      content:
        "Learn how to build modern web applications with Next.js and React.",
      slug: "getting-started-nextjs",
      published: true,
    },
    {
      title: "Database Design with Prisma",
      content: "A comprehensive guide to designing databases using Prisma ORM.",
      slug: "database-design-prisma",
      published: true,
    },
    {
      title: "Building REST APIs",
      content:
        "Learn how to create RESTful APIs with proper error handling and validation.",
      slug: "building-rest-apis",
      published: false,
    },
    {
      title: "Authentication in Web Apps",
      content:
        "Implement secure authentication systems in your web applications.",
      slug: "authentication-web-apps",
      published: true,
    },
    {
      title: "Deployment Strategies",
      content:
        "Different approaches to deploying your applications to production.",
      slug: "deployment-strategies",
      published: false,
    },
    {
      title: "Ang aking tite at ang aking puke",
      content:
        "Ang aking tite ay malaki at ang aking puke ay masikip. Ang mga ito ay nagbibigay sa akin ng kasiyahan at ligaya.",
      slug: "tite-puke",
      published: true,
    },
  ];

  for (const post of posts) {
    await prisma.post.create({
      data: post,
    });
  }

  console.log("✅ Seeded 5 posts successfully!");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
