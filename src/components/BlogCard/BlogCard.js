import React from 'react'
import "./Blogcard.css"
import { Link } from 'react-router-dom'

function BlogCard({id, title, content, author, date, categories }) {
  return (
    <Link className='blog-card' to={`/blog/${id}`}>
      
      <h2 className='blog-title'>{title}</h2>
      <p className='blog-content-preview'>{content.substring(0,150)}...</p>
      
      <div className='author-card'>
        <img src={author.avatar} alt='author' className='author-image'/>
        <span className='author-name'>{author.name}</span>
      </div>
      <span className='blog-date'>{date}</span>
      <div className='badge-container'>
      {categories.map((category,i) =>{
        return <span key={i} className='category-badge'>{category}</span>
      })}
      </div>
    </Link>
    
  )
}

export default BlogCard
