import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import Seo from "../components/Seo"
import PropTypes from "prop-types"

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <Seo
        title="Blog"
        description="Sam Adjei posts blog entries dedicated to web design, development and all this related to freelancing!"
      />
      <section className="blog-setup">
        <div className="blog-posts">
          <Blogs blogs={blogs} title="Blogs" />
        </div>
      </section>
    </Layout>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export const query = graphql`
  {
    allStrapiBlogs(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        content
        desc
        date(formatString: "DD MMM, YYYY")
        id
        title
        # category
      }
    }
  }
`
export default Blog
