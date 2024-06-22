
import blogs from "../../data"
import "./BlogView.css"
import { useParams } from "react-router-dom"

function BlogView() {
    const {id} = useParams()
    const selectedBlog = blogs.find((blogObject)=>blogObject.id===id)
        
  return (
    <div className="blog-view-container">
        <h1 className="blog-view-title">{selectedBlog.title}</h1>
        <p className="blog-view-authior">{selectedBlog.author.name}  </p>
        <p className="blog-view-date">{selectedBlog.date}</p>
        <img src={selectedBlog.author.avatar} className="blogview-avatar"/>
        <p className="blog-view-content">{selectedBlog.content}</p>
        

    </div>
  )
}

export default BlogView


