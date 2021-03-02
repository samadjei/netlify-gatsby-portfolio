import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
import PropTypes from "prop-types"


const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <section className="blog-page">
        <Blogs blogs={blogs} title="Blogs" />
      </section>
    </Layout>
  )
}

Blog.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
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
      }
    }
  }
`
export default Blog
