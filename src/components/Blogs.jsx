// src/components/Blogs.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../style';
import { circles, vcircle } from '../assets';
import { blogData } from '../constants';

const Blogs = () => {
  const [expandedBlogs, setExpandedBlogs] = useState([]);

  const toggleContent = (blogId) => {
    setExpandedBlogs((prevExpandedBlogs) => {
      if (prevExpandedBlogs.includes(blogId)) {
        return prevExpandedBlogs.filter((id) => id !== blogId);
      } else {
        return [...prevExpandedBlogs, blogId];
      }
    });
  };

  return (
    <div>
      <div className={`blogs-container bg-primary ${styles.padding}`}>
        <div className='flex flex-row'>
          <div className="md:w-3/5 mr-8">
            <h3 style={{ ...styles.sectionSubText, marginTop: '0' }}>INSIGHTS UNLEASHED</h3>
            <h2 style={styles.sectionHeadText}>EXPLORE, LEARN, AND INSPIRE </h2>
          </div>
          <div className="md:w-1/8 flex justify-end">
            <img src={circles} alt="" />
          </div>
        </div>
        {blogData.map((blog) => (
          <div className='flex mt-16 ' key={blog.id}>
            <img src={vcircle} alt="" className="mr-4 mt-[21%] h-28" />
            <div className="blog-post">
              <div className="flex mb-3 p-4 rounded-xl border border-emerald-500 mt-16 w-[60%]">
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-96 h-auto rounded-lg mr-4"
                  />
                )}
                <div>
                  <h2 className='text-primary text-3xl mt-5 font-bold '>{blog.title}</h2>
                  <p>
                    {expandedBlogs.includes(blog.id) ? blog.content : `${blog.content.split(' ').slice(0, 50).join(' ')}...`}
                  </p>
                  {blog.content.split(' ').length > 50 && (
                    <Link to={`/blog/${blog.id}`}>
                      <button
                        onClick={() => toggleContent(blog.id)}
                        className="bg-blue-500 text-white px-4 py-2 mt-3 rounded"
                      >
                        {expandedBlogs.includes(blog.id) ? 'Read Less' : 'Read More'}
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
