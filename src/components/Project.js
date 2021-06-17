import React from "react"
import PropTypes from "prop-types"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

const Project = ({ url, image }) => {
  const pathToImage = getImage(image.localFile)
  return (
    <section className="project">
      <a
        target="_blank"
        rel="noreferrer"
        alt="project images"
        aria-label="Project images"
        href={url}
      >
        <GatsbyImage
          className="project__img"
          image={getImage(pathToImage)}
          alt="Portfolio Images"
        />
      </a>
    </section>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        title
        url
        content
        slug
        stack {
          id
          title
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                blurredOptions: { width: 100 }
                placeholder: BLURRED
                width: 420
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
        }
      }
    }
  }
`

Project.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}
export default Project
