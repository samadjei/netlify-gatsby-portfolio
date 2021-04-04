import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Project from "../components/Projects"
import MoreInfo from "../components/MoreInfo"
import Contact from "../components/Contact"
import SEO from "../components/SEO"
import Blogs from "../components/Blogs"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data
  return (
    <Layout>
      <SEO title="Sam Adjei" description="Homepage of Sam Adjei" />
      <Hero />
      <Services title="what services do i provide?" />
      <MoreInfo title="Why hire Sam Adjei as your developer?" />
      <Project projects={projects} title="See my work" showLink />
      {/* <Testimonials title="What others say about me" /> */}
      <Contact title="Let's get connected" />
      <Blogs blogs={blogs} title="Latest Blog Posts" showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        id
        title
        url
        content
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(limit: 3, sort: { fields: date, order: DESC }) {
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
