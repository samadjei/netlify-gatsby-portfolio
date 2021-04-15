import React, {useRef, useEffect} from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { TweenMax, TimelineLite, Power3 } from "gsap";

import { Button } from "./Button"
import { FiCheck } from "react-icons/fi"

const Hero = () => {
	let app = useRef(null)
  let images = useRef(null)
  let content = useRef(null)
  let tl = new TimelineLite({ delay: 0.8 })

  useEffect(() => {
    // Image Variable
    const heroImage = images.firstElementChild

    // Content Variable
    const headlineFirst = content.children[0]
    const headlineSecond = headlineFirst.nextSibling
    const headlineThird = headlineSecond.nextSibling
    const headlineFourth = headlineThird.nextSibling

    // Removing Initial Flash
    TweenMax.to(app, 0, { css: { visibility: "visible" } })

    // Hero Image animation
    // defines how our the initial state looks
    tl.from(heroImage, 1.2, { y: 1280, ease: Power3.easeOut }, "Start").from(
      heroImage.firstElementChild,
      2,
      { scale: 1.6, ease: Power3.easeOut },
      0.2
    )

    // Hero Content Animation
    tl.staggerFrom(
      [headlineFirst, headlineSecond, headlineThird, headlineFourth],
      1,
      {
        y: 44,
        opacity: 0,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.3,
      "Start"
    )
  }, [tl])
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
    <section className="hero container" ref={el => app = el}>
      <div className="hero__grid">
        <div className="hero__content" ref={el => content = el}>
          <h1 className="hero--title hero--white-text">
            Freelance WordPress developer
          </h1>
          <p className="hero--desc hero--white-text">
            Hey there,
            <span role="img" aria-label="hand wave" class="wave">
              👋🏾
            </span>
            i’m Samuel, a freelance web developer with 3+ years of experience
            building and designing beautiful, responsive and modern
            websites with WordPress and React.
          </p>
          <div className="hero__list" ref={el => content = el}>
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
        <div className="profile__outer" ref={el => images = el} >
          <div className="profile">
            <Image
              className="profile--photo"
              fluid={data.profile.childImageSharp.fluid}
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
