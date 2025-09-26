"use server";

import prisma from "@/lib/db";

export async function createPost() {
  await prisma.post.create({
    data: {},
  });
}
