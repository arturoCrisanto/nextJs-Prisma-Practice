"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function createPost(formData) {
  await prisma.post.create({
    data: {
      title: formData.get("title"),
      content: formData.get("content") || null,
      slug: formData
        .get("title")
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .toLowerCase()
        .replace(/\s+/g, "-"),
      published: formData.get("published") === "on" ? true : false,
    },
  });

  revalidatePath("/posts");
  redirect("/posts");
}

export async function deletePost(id) {
  await prisma.post.delete({
    where: {
      id: parseInt(id),
    },
  });
}
export async function updatePost(formData, id) {
  await prisma.post.update({
    where: {
      id: parseInt(id),
    },
    data: {
      title: formData.get("title"),
      content: formData.get("content") || null,
      slug: formData
        .get("title")
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .toLowerCase()
        .replace(/\s+/g, "-"),
      published: formData.get("published") === "on" ? true : false,
    },
  });
}
