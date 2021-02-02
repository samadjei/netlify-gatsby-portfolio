import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import { Button } from "./Button"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query Images {
      profile: file(relativePath: { eq: "profile-photo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__content">
            <h1 className="hero--title">Freelance web designer & developer</h1>
            <p className="hero--desc">
              Hey there,
              <span role="img" aria-label="hand wave" class="wave">
                👋🏾
              </span>
              i’m Samuel, a freelance web developer based in Slough who is
              focused on building bespoke and professional websites to help
              businesses gain exposure to potential clients.
            </p>
            <a href="#hire">
              <Button
                className="btn"
                buttonStyle="btn--outline"
                buttonSize="btn--desktop"
              >
                Hire Me
              </Button>
            </a>
          </div>
          <div className="profile">
            <Image
              loading="lazy"
              className="profile--photo"
              fluid={data.profile.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
