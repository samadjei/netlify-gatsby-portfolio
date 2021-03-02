import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Blog = ({ id, title, date, desc, slug }) => {
  return (
    <Link to={`/blogs/${slug}`} className="blog" key={id}>
      <article>
        <div className="blog__card">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="blog__footer">
            <p className="blog__footer--category">{date}</p>
            <p>{date}</p>
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
  desc: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default Blog
