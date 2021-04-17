import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"

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
        {image && (
          <Image fluid={image.childImageSharp.fluid} className="project__img" />
        )}
      </a>
    </section>
  )
}

Project.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}
export default Project
