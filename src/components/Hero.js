import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import { Button } from "./Button"
import { FiCheck } from "react-icons/fi"

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
            <h1 className="hero--title hero--white-text">
              Freelance web designer & developer
            </h1>
            <p className="hero--desc hero--white-text">
              Hey there,
              <span role="img" aria-label="hand wave" class="wave">
                👋🏾
              </span>
              i’m Samuel, a freelance web developer based in Slough who is
              focused on building bespoke and professional websites to help
              businesses gain exposure to potential clients.
            </p>
            <div className="hero__list">
              <h2 className="hero__list--sub">
                If you're looking for:
              </h2>
              <ul className="hero__listings">
                <li className="hero--l hero--white-text">
                  <span>
                    <FiCheck className="hero--check" />
                  </span>
                  Someone to modernise you current website
                </li>
                <li className="hero--l hero--white-text">
                  <span>
                    <FiCheck className="hero--check" />
                  </span>
                  A way to increase exposure to potential clients on the web
                </li>
                <li className="hero--l hero--white-text">
                  <span>
                    <FiCheck className="hero--check" />
                    Build you a fast and responsive site for your new business
                  </span>
                </li>
              </ul>
                <p className="hero--sub hero--white-text">
                  You've come to the right place, scroll down to see more.
                </p>
            </div>
            <a href="#contact" alt="contact link">
              <Button
                className="btn"
                buttonStyle="btn--outline"
                buttonSize="btn--desktop"
              >
                Hire Me Today
              </Button>
            </a>
          </div>
          <div className="profile">
            <Image
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
