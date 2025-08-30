import { prisma } from "../../../lib/db";

type PageProps = {
  params: Promise<{ id: string }>; // 👈 mark params as a Promise
};

export default async function BackendTestPage({ params }: PageProps) {
  // ✅ wait for params
  const { id } = await params;

  // console.log("params id:", id);

  return (
    <div>
      <h1>This page is for id: {id}</h1>
    </div>
  );
}
/* 


1. - Dynamic Route:
- This file lives in /app/backendTest/[id]/page.tsx
- The [id] makes it a dynamic route - anything 
- after the backendTest/[id] will be the param
- Example: /posts/123 → params.id = "123"

2. Params

- Next.js passes the route params into the function as 'params'
- we need to do this so we can get the route from the link 
- we click

- In short - we need params so we can get the link route in the
- URL from the Link click

3. Database Query

- We then use prisma.post.findUnique and pass in the Where
- and match it to the params.id

- its params id because that's what we called the folder route

- The id before the params.id is just for typescript
- so we know what we're expecting

- This fetches the data from Prisma Where the id matches this 
- route

4. Conditional Render

- If no post is found - then give us an early return

- The link is linked to the backendTest/id route

- so the backendTest[id] makes the route, then the link
- links us to that Route

In short:  
URL → params.id → Prisma query → Render result.

*/
