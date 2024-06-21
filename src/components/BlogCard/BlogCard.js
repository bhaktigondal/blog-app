import React from 'react'
import "./Blogcard.css"

function BlogCard({ title, content, author, date, categories }) {
  return (
    <div className='blog-card'>
      
      <h2 className='blog-title'>{title}</h2>
      <p className='blog-content-preview'>{content.substring(0,100)}...</p>
      <div className='author-card'>
        <img src={author.avatar} alt='author' className='author-image'/>
        <span className='author-name'>{author.name}</span>
      </div>
      
    </div>
  )
}

export default BlogCard
