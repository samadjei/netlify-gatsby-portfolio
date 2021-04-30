import React from "react"
import PropTypes from "prop-types"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Project = ({ image, url }) => {
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
          image={getImage(image)}
          alt="Portfolio Images"
        />
      </a>
    </section>
  )
}

Project.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}
export default Project
