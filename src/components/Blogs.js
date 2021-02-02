import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"

export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <section className="blog__container">
      <Title title={title} />
      <div className="blogs">
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </div>
      {showLink && (
        <div className="link">
          <Link className="link--inner" to="/Blog">
            Read More Posts
          </Link>
        </div>
      )}
    </section>
  )
}
export default Blogs
