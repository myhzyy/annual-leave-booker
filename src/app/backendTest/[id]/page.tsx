// app/backendTest/[slug]/page.tsx
import { prisma } from "../../../lib/db";

type PageProps = {
  params: { id: string }; // comes from folder name [slug]
};

export default async function BackendTestPage({ params }: PageProps) {
  const slug = params.id;

  const post = await prisma.post.findMany({
    where: { slug },
  });

  console.log(post[0]);

  if (!post) {
    return <h1>No post found for id</h1>;
  }

  // console.log(post);

  return (
    <div>
      <h1>{post[0].title}</h1>
      <p>slug: {post[0].slug}</p>
      <p>{post[0].content}</p>
    </div>
  );
}
