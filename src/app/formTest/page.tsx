"use client";

import { useState } from "react";
import { createPost } from "../../actions/actions";

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
    .slice(0, 60);
}

export default function FormTest() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");

  return (
    <div>
      <form action={createPost} className="space-y-3">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            const v = e.target.value;
            setTitle(v);
            setSlug(slugify(v));
          }}
          required
          className="border px-3 py-2 rounded"
        />

        {/* hidden auto-generated slug that actions.ts expects */}
        <input type="hidden" name="slug" value={slug} />

        <textarea
          name="content"
          placeholder="Write something…"
          required
          className="border px-3 py-2 rounded w-full h-32"
        />

        <button type="submit" className="px-4 py-2 rounded bg-black text-white">
          Submit
        </button>
      </form>
    </div>
  );
}
