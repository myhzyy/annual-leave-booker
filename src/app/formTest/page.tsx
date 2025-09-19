import { prisma } from "../../lib/db";
import NewPostForm from "./newPostForm";

export default async function FormTestPage() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <main className="p-6 space-y-6">
      <NewPostForm />
      <section>
        <h2 className="font-semibold mb-2">Posts</h2>
        <ul className="space-y-2">
          {posts.map((p) => (
            <li key={p.id} className="border rounded p-2">
              <div className="font-medium">{p.title}</div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
