// src/components/BlogDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { blogData } from '../constants';

const BlogDetail = () => {
  const { blogId } = useParams();
  const parsedBlogId = parseInt(blogId, 10);
  const blog = blogData.find((blog) => blog.id === parsedBlogId);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      {blog.image && <img src={blog.image} alt={blog.title} />}
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
