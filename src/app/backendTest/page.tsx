import Link from "next/link";
import { prisma } from "../../lib/db";

export default async function BackendTest() {
  const posts = await prisma.post.findMany();

  return (
    <ul>
      {posts.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.title}</p>

            <Link href={`/backendTest/${item.id}`}>hi!</Link>
          </div>
        );
      })}
    </ul>
  );
}
