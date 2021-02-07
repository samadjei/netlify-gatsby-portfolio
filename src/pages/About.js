import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/SEO"
import Title from "../components/Title"
import Contact from "../components/Contact"

import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { FaSass } from "react-icons/fa"
import { FaPhp } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import { FaFigma } from "react-icons/fa"
import { FaAdobe } from "react-icons/fa"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutProfile: file(relativePath: { eq: "profile-photo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      presenting: file(relativePath: { eq: "presenting.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className="about">
        <SEO title="About" />
        <div className="about-me">
          <Title className="about-title" title="About Samuel Adjei" />
        </div>
        <div className="about__center">
          <div className="about__content">
            <p className="about__content--info">
              Hey there! I'm Samuel, a freelance web developer from Slough, UK.
              I've been making websites since 2018 as a hobby and have decided
              to turn that into a profession. Over this time, i have have fallen
              in love with web development and design which has pushed me to
              strive to create the best quality websites posisble.
            </p>
            <p className="about__content--info">
              I am currently in my 3rd year as a UWE (Universoty of the West of
              England) studying ITMB. It's a great course which gives students a
              50/50 between between Business Management and IT, the best of both
              worlds in my opinion.
            </p>
            <p className="about__content--info">
              Being a self-taught developer, i have taken the time to learn the
              latest web technologies have available which will allow me to
              design and create the most modern and performante site possible. I
              enjoy learning and challenging myself when it comes to building
              website / web applications.
            </p>

            <div className="about-img">
              <Img
                className="about--photo"
                fluid={data.aboutProfile.childImageSharp.fluid}
              />
            </div>
            <p className="about__content--info">
              In my spare time, if i'm not hanging out with friends, you'll
              probably catch my in the gym, playing video games or watching
              anime.
            </p>
            <div className="stack">
              <h4>Here are my current tech stack:</h4>
              <div className="stack-items">
                <FaHtml5 className="stack-icons" />
                <FaCss3Alt className="stack-icons" />
                <FaSass className="stack-icons" />
                <FaReact className="stack-icons" />
                <FaPhp className="stack-icons" />
                <FaFigma className="stack-icons" />
                <FaAdobe className="stack-icons" />
              </div>
            </div>
          </div>
        </div>
        <div className="about__contact">
          <Contact id="about-form" title={"Contact Me"} />
        </div>
      </div>
    </Layout>
  )
}

export default About
