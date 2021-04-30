import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Project from "../components/Projects"
import MoreInfo from "../components/MoreInfo"
import Contact from "../components/Contact"
import Seo from "../components/Seo"
import Blogs from "../components/Blogs"

export default function Home({ data }) {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data
  return (
    <Layout>
      <Seo title="Sam Adjei" description="Homepage of Sam Adjei" />
      <Hero />
      <Services title="what services do i provide?" />
      <MoreInfo title="Why hire Sam Adjei as your developer?" />
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
        url
        content
				slug
        image {
          childImageSharp {
            gatsbyImageData(
              blurredOptions: { width: 100 }
              placeholder: BLURRED
              width: 420
              transformOptions: { cropFocus: CENTER }
            )
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
        description
        date(formatString: "DD MMM, YYYY")
        id
        title
      }
    }
  }
`
