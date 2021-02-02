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
      <SEO title="Work" />
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        title
        content
        slug
        url
        image {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default Work
