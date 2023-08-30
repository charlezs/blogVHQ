// src/app/blog/[id].tsx
import { blogs } from "@/data";
import { useRouter } from "next/router";

const Blog = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("ID:", id); // Add this line to log the id

  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default Blog;
