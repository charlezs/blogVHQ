"use client";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Makeup from "@/app/components/PageMakeup";
import { blogs } from "@/app/data";

const Blog = ({ params }: { params: { id: string } }) => {
  const blog = blogs.find((blog) => blog.id === params.id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <Navbar />
      <Makeup
        title={blog.title}
        content={blog.content}
        imageUrl={blog.imageUrl}
        authorName={blog.author.name}
        blogDate={blog.date}
      />
      <Footer />
    </div>
  );
};

export default Blog;
