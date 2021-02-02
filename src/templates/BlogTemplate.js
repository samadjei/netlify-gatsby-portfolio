import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import { Button } from "../components/Button"

const BlogTemplate = ({ data }) => {
  const { content, title, desc } = data.blog

  return (
    <Layout>
      <div className="container">
        <SEO title={title} description={desc} />
        <section className="blog-template">
          <div className="section-center">
            <article className="blog-content">
              <ReactMarkdown className="some-content" source={content} />
            </article>
            <Link className="btn--center" to="/blog">
              <Button buttonStyle="btn--primary" buttonSize="btn--desktop">
                Blog Page
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
    }
  }
`

export default BlogTemplate
