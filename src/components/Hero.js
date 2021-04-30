import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import { Button } from "./Button"
import { FiCheck } from "react-icons/fi"

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero__grid">
        <div className="hero__content">
          <h1 className="hero--title hero--white-text">
            Freelance Web Developer
          </h1>
          <p className="hero--desc hero--white-text">
            Hey there,
            <span role="img" aria-label="hand wave" class="wave">
              👋🏾
            </span>
            i’m Samuel, a freelance web developer with 3+ years of experience
            building and designing beautiful, responsive and modern websites
            with WordPress and React.
          </p>
          <div className="hero__list">
            <h2 className="hero__list--sub">If you're looking for:</h2>
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
                A way to increase exposure to potential clients on Google
              </li>
              <li className="hero--l hero--white-text">
                <span>
                  <FiCheck className="hero--check" />A fast and responsive site
                  for your new <span className="hero--span">business</span>
                </span>
              </li>
            </ul>
            <p className="hero--sub hero--white-text">
              You've come to the right place, scroll down to see more!
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
        <div className="profile__outer">
          <div className="profile">
            <StaticImage
              className="profile--photo"
              src="../assets/profile-photo.jpg"
              width={400}
              alt="Profile Photo"
              placeholder="blurred"
              format={["AUTO", "WEBP", "AVIF"]}
            />
            <figcaption className="profile--caption">
              Freelance Web Developer, Samuel Adjei
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
