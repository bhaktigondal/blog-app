import "./Home.css";
import blogs from "../../data";
import BlogCard from "../../components/BlogCard/BlogCard";

function Home() {
  console.log(blogs);
  return (
    <>
    <div className="blog-container">
      {blogs.map((blogObject, i) => {
        const { title, content, author, date, categories } = blogObject;
        return (
          <BlogCard
            key={i}
            title={title}
            content={content}
            author={author}
            date={date}
            categories={categories}
          />
        );
      })}
      </div>
    </>
  );
}

export default Home;