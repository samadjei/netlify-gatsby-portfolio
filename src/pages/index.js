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

export default function Home({ data }) {
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
          localFile {
            childImageSharp {
              gatsbyImageData(
                blurredOptions: { width: 100 }
                placeholder: BLURRED
                width: 420
                transformOptions: { cropFocus: CENTER }
								formats: [AUTO, WEBP, AVIF]
              )
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
        description
        date(formatString: "DD MMM, YYYY")
        id
        title
      }
    }
  }
`
