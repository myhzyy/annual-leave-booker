"use server";

import { prisma } from "../lib/db";

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const content = formData.get("content") as string;

  await prisma.post.create({
    data: {
      title,
      slug,
      content,
    },
  });
}
