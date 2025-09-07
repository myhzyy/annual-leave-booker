import Link from "next/link";
import { prisma } from "../../lib/db";

export default async function BackendTest() {
  const posts = await prisma.post.findMany({
    where: {
      title: {
        endsWith: "Post",
      },
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  console.log(posts);

  if (posts.length === 0) {
    return (
      <div>
        <h1>{posts.length}</h1>
        <p>No posts yet.</p>
        <Link href="/api/seed">Insert a sample post</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>post ! {posts.length}</h1>
      <Link href="/formTest">Form test</Link>

      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.content}</h2>
            <Link href={`/backendTest/${post.slug}`}>Link click!</Link>
          </div>
        );
      })}
    </div>
  );
}

/* 

- Here we are mapping over the object we made in Primsa studio
- for each of the posts, we are rending them id off that object
- we then make the link click link to /backendTest and then post ID

*/
