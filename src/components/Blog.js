import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Blog = ({ id, title, date, slug }) => {
  return (
    <Link to={`/blogs/${slug}`} className="blog" key={id}>
      <ul className="front__blog">
        <li className="front__blog--list">
          <h3 className="blog--details">{title}</h3>
          <p className="blog--details">{date}</p>
        </li>
      </ul>
    </Link>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default Blog
