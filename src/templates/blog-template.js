import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import Seo from "../components/SEO"

import { SiInstagram } from "react-icons/si"
import { SiTwitter } from "react-icons/si"
import { SiLinkedin } from "react-icons/si"
import { SiFacebook } from "react-icons/si"
import Title from "../components/Title"
import { DiscussionEmbed } from "disqus-react"

// import Disqus from "../components/Disqus"

const BlogTemplate = ({ data, pageContext }) => {
  const { content, title, description, id } = data.blog

  const baseURL = "https://samadjei.com/"
  const disqusShortname = "www-samadjei-com-1"
  const disqusConfig = {
    identifier: id,
    title: title,
    url: baseURL + pageContext.slug,
  }

  return (
    <Layout>
      <div className="template container">
        <Seo title={title} description={description} />
        <section className="blog__template">
          <Title title={title} />
          <div className="section-center">
            <article className="blog-content">
              <ReactMarkdown>{content}</ReactMarkdown>
            </article>
          </div>
          <div className="social-share-links"></div>
          <div className="follow">
            <h3 className="follow__header">Share this post on:</h3>
            <ul className="template__links">
              <li className="template__lists">
                {/* Twitter */}
                <a
                  className="template__outer"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    "https://www.twitter.com/share?url=" +
                    baseURL +
                    pageContext.slug +
                    "&via" +
                    "twitterHandle"
                  }
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
									href={
										// !Fix link
                    "https://www.linkedin.com/shareArticle?mini=true&url=" +
                    baseURL +
                    pageContext.slug
                  }
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
              <li className="template__lists">
                {/* Facebook */}
                <a
                  className="template__outer"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    "https://www.facebook.com/sharer.php?u=" +
                    baseURL +
                    pageContext.slug
                  }
                  alt="facebook link"
                  aria-label="Facebook"
                >
                  <SiFacebook className="blogs--inner" />
                </a>
              </li>
            </ul>
          </div>
          <DiscussionEmbed
            className="disqus"
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      id
      content
      title
      description
    }
  }
`

export default BlogTemplate
