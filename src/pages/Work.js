import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const Work = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <SEO
        title="Work"
        description="Here is a showcase of some of the work done by Sam Adjei"
      />
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
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
  }
`
export default Work
