import Link from "next/link";
import { prisma } from "../../lib/db";

export default async function BackendTest() {
  const posts = await prisma.user.findMany();

  // console.log(posts);

  if (posts.length === 0) {
    return (
      <div>
        <h1>post</h1>
        <p>No posts yet.</p>
        <Link href="/api/seed">Insert a sample post</Link>
      </div>
    );
  }

  const urlPage = posts[0];

  return (
    <div>
      <h1>post</h1>

      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.id}</h2>
            <Link href={`/backendTest/${post.id}`}>Link click!</Link>
          </div>
        );
      })}
    </div>
  );
}

/* 

- This queries Prisma.post
- post is what the database is called
- findMany means get all rows from this table
- there are other ones, for example findUnique, findFirst
- these are just different types of queries


*/
