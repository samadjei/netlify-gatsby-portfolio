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
      <SEO title="Home" />
      <Hero />
      <Services title="what services do i provide?" />
      <MoreInfo title="Why hire Samuel Adjei as your developer?" />
      <Project projects={projects} title="See my work" showLink />
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
        content
        slug
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
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
