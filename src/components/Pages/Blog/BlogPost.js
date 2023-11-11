import React, { useState } from 'react';
import {  } from 'react-icons'
import { FaClipboard, FaHeart, FaThumbsUp, FaTimes } from 'react-icons/fa';
import './Blog.css'

const BlogPost = ({ title, content, author, onDelete, onLike, onHeart, onShare }) => {
    const [likes, setLikes] = useState(0);
    const [hearts, setHearts] = useState(0);
    const [likeActive, setLikeActive] = useState(false);
    const [heartActive, setHeartActive] = useState(false);

    const handleLike = () => {
        setLikes(likes + 1);
        onLike();
        setLikeActive(true); // Set like button to active
    };

    const handleHeart = () => {
        setHearts(hearts + 1);
        onHeart();
        setHeartActive(true); // Set heart button to active
    };
  
    const handleShare = () => {
        // For simplicity, let's copy the post content to the clipboard
        const shareableContent = `Check out this blog post on The Ephesians 5 Tribe website: "${title}" - ${content} written by ${author}`;
        
        // Create a textarea element, set its value, select the text, and copy it to the clipboard
        const textarea = document.createElement('textarea');
        textarea.value = shareableContent;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    
        // Notify the user that the content has been copied
        alert('Content copied to clipboard!');
      };

    return (
        <div className="blog-post">
            <h2>{title}</h2>
            <p className='author'>{author}</p>
            <p className='content'>{content}</p>
            <div className="actions">
                <button onClick={handleLike} className={likeActive ? 'like-active' : ''} >
                    <FaThumbsUp className='likes' /> {likes}
                </button>
                <button onClick={handleHeart} className={heartActive ? 'heart-active' : ''} id='heart' >
                    <FaHeart className='hearts' /> {hearts}
                </button>
                <button onClick={onDelete} className='delete'>
                    <FaTimes />
                </button>
                <button onClick={handleShare} className='share'>
                    <FaClipboard  />
                </button>
            </div>
        </div>
  );
};

export default BlogPost;
