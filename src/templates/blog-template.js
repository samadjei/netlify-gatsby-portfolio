import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"

import { SiInstagram } from "react-icons/si"
import { SiTwitter } from "react-icons/si"
import { SiLinkedin } from "react-icons/si"
import Title from "../components/Title"

const BlogTemplate = ({ data }) => {
  const { content, title, description } = data.blog

  return (
    <Layout>
      <div className="template container">
        <SEO title={title} description={description} />
        <section className="blog__template">
          <Title title={title} />
          <div className="section-center">
            <article className="blog-content">
              <ReactMarkdown>{content}</ReactMarkdown>
            </article>
          </div>
          <div className="follow">
            <h3 className="follow__header">Follow me for more insights on:</h3>
            <ul className="template__links">
              <li className="template__lists">
                {/* Twitter */}
                <a
                  className="template__outer"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/samkadjei"
                  alt="twitter link"
                  aria-label="Twitter"
                >
                  <SiTwitter className="blogs--inner" />
                </a>
              </li>
              <li className="template__lists">
                {/* LinkedIn */}
                <a
                  className="template__outer"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://uk.linkedin.com/in/samuel-adjei?trk=people-guest_people_search-card"
                  alt="linkedin link"
                  aria-label="LinkedIn"
                >
                  <SiLinkedin className="blogs--inner" />
                </a>
              </li>
              <li className="template__lists">
                {/* Instagram */}
                <a
                  className="template__outer"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/samadjeiltd/"
                  alt="instagram link"
                  aria-label="Instagram"
                >
                  <SiInstagram className="blogs--inner" />
                </a>
              </li>
            </ul>
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
      description
    }
  }
`

export default BlogTemplate
