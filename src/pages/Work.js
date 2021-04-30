import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

const Work = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <Seo title="Work" description="Here is a showcase of some of the work done by Sam Adjei"/>
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
        # slug
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
