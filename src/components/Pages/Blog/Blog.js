// src/components/Blog.js
import React, { useState } from 'react';
import BlogPost from './BlogPost';
import './Blog.css'
import Navbar from '../../Navbar';
import ScrollToTopButton from '../../ScrollToTopButton';
import TopIcons from '../../TopIcons';

const Blog = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "My First Blog Post", content: "This is my first blog post.", author: "Love Dr" },
    { id: 2, title: "My First Blog Post", content: "This is my first blog post.", author: "Love Dr" },
    { id: 3, title: "My First Blog Post", content: "This is my first blog post.", author: "Love Dr" },
    { id: 4, title: "My First Blog Post", content: "This is my first blog post.", author: "Love Dr" },
    { id: 5, title: "My First Blog Post", content: "This is my first blog post.", author: "Love Dr" },
    { id: 6, title: "My First Blog Post", content: "This is my first blog post.", author: "Love Dr" },
    { id: 7, title: "My First Blog Post", content: "This is my first blog post.", author: "Love Dr" },
    { id: 8, title: "My First Blog Post", content: "This is my first blog post.", author: "Love Dr" },
    { id: 9, title: "My First Blog Post", content: "This is my first blog post.", author: "Love Dr" },
    { id: 10, title: "My First Blog Post", content: "This is my first blog post.", author: "Love Dr" },
    { id: 11, title: "My First Blog Post", content: "This is my first blog post.", author: "Love Dr" },
    { id: 12, title: "My First Blog Post", content: "This is my first blog post.", author: "Love Dr" },
    { id: 13, title: "My First Blog Post", content: "This is my first blog post.", author: "Love Dr" },
    { id: 14, title: "My First Blog Post", content: "This is my first blog post.", author: "Love Dr" },
    { id: 25, title: "React Blog", content: "Creating a blog in React is fun!", author: 'Love Dr' },
  ]);

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
  };

  const handleLike = (postId) => {
    // Update the likes for the post with postId
  };

  const handleHeart = (postId) => {
    // Update the hearts for the post with postId
  };

  const handleShare = (postId) => {
    // Share the post with postId
  };

  return (
    <div className="blog">
        <TopIcons />
        <Navbar />
      {posts.map((post) => (
        <BlogPost
          className="Blogpost"
          key={post.id}
          title={post.title}
          author={post.author}
          content={post.content}
          onDelete={() => handleDelete(post.id)}
          onLike={() => handleLike(post.id)}
          onHeart={() => handleHeart(post.id)}
          onShare={() => handleShare(post.id)}
        />
      ))}
      <ScrollToTopButton />
    </div>
  );
};

export default Blog;
