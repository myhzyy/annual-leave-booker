"use server";

import { prisma } from "../lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(fd: FormData) {
  const titleV = fd.get("title");
  const slugV = fd.get("slug");
  const contentV = fd.get("content");

  if (
    typeof titleV !== "string" ||
    typeof slugV !== "string" ||
    typeof contentV !== "string"
  ) {
    throw new Error("Missing title/slug/content");
  }

  const data = {
    title: titleV.trim(),
    slug: slugV.trim(),
    content: contentV.trim(),
  };
  if (!data.title || !data.slug || !data.content)
    throw new Error("Fields cannot be empty");

  try {
    await prisma.post.create({ data });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    throw new Error(`Failed to create post: ${msg}`);
  }

  // optional: refresh a listing page
  revalidatePath("/posts");
}
