import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Blog = ({ id, title, description, slug }) => {
  return (
    <Link to={`/blogs/${slug}`} className="blog" key={id}>
      <article>
        <div className="blog__card">
          <div>
            <h3>{title}</h3>
            <p className="blog-desc">{description}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default Blog
