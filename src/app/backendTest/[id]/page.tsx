import Link from "next/link";
import { prisma } from "../../../lib/db";

export default async function BackendTestPage({ params }) {
  const posts = await prisma.post.findUnique({
    where: {
      id: params.id,
    },
  });

  return (
    <div>
      <p>{posts?.title}</p>
      <p>{posts?.slug}</p>
    </div>
  );
}
