import React, { useState } from 'react';
import {  } from 'react-icons'
import { FaHeart, FaShare, FaThumbsUp, FaTimes } from 'react-icons/fa';
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
                <button onClick={onShare} className='share'>
                    <FaShare  />
                </button>
            </div>
        </div>
  );
};

export default BlogPost;
