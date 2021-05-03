import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"

import { FiInstagram } from "react-icons/fi"
import { FiTwitter } from "react-icons/fi"
import { FiLinkedin } from "react-icons/fi"

const BlogTemplate = ({ pageContent: { title }, data }) => {
  // const { content, title, description } = data.blog
  return (
    <Layout>
      <div className="template container">
        <SEO title={title} description={description} />
        <section className="blog__template">
          <div className="section-center">
            <article className="blog-content">
              <ReactMarkdown
                className="some-content"
                source={data.strapiBlog.content}
              />
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
                  <FiTwitter className="blogs--inner" />
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
                  <FiLinkedin className="blogs--inner" />
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
                  <FiInstagram className="blogs--inner" />
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
  query getSingleBlog($title: String) {
    strapiBlogs(title: { eq: $title }) {
      content
      title
      description
    }
  }
`

// export const query = graphql`
//   query getSingleProject($title: String) {
//     strapiProject(title: { eq: $title }) {
//       description
//       title
//       image {
//         publicURL
//       }
//     }
//   }
// `

export default BlogTemplate
