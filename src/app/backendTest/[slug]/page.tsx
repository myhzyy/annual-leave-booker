import { createPost } from "@/actions/actions";
import { prisma } from "../../../lib/db";
import styles from "./page.module.css";

interface PageProps {
  params: { slug: string };
}

export default async function BackendTestPage({ params }: PageProps) {
  const { slug } = await params;

  const post = await prisma.post.findUnique({
    where: { slug },
  });

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <form action={createPost} className={styles.formDiv}>
        <input type="text" name="title" placeholder="title" />
        <textarea name="content" placeholder="content"></textarea>
        <button>Submit</button>
      </form>

      {/* <h1>{post.title}</h1>
      <p>{post.content}</p> */}
    </div>
  );
}
