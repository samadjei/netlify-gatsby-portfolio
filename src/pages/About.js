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
// import { FaPhp } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import { FaFigma } from "react-icons/fa"
import { FaElementor } from "react-icons/fa"
import { SiGatsby } from "react-icons/si"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
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
    <Layout>
      <div className="about">
        <SEO
          title="About"
          description="Hey there! I'm Samuel, a freelance web developer from Slough, UK."
        />
        <div className="about-me">
          <Title className="about-title" title="About Samuel Adjei" />
        </div>
        <div className="about__center">
          <div className="about__content">
            <p className="about__content--info">
              Hey there! I'm Samuel, a freelance front-end web developer based
              in Slough, UK. I've been making websites since 2018 as a hobby and
              have decided to turn that into a profession. Over this time, i
              have have fallen in love with web development and design which has
              pushed me to strive to create the best quality websites possible.
            </p>
            <p className="about__content--info">
              Being a self-taught developer, i have taken the time to learn the
              latest web technologies available to allow me to build great and
              fast websites. When left to my own devices, my preferred tech
              stack is React, SCSS and GraphQL with Gatsby or NextJS. This is
              then fed into an automated CI pipeline using on Netlify/Vercel via
              Git.
            </p>
            <p className="about__content--info">
              However, as a contractor, i tend and depending on the project i'm
              undertaking, i tend to go for the WordPress route using the
              Elementor page builder as my preferred way of building site. It
              allows me to build beautiful WordPress sites in a shorter time
              than it would take me if i was to build from scratch so this gives
              me the opportunity to focus on other important aspects of the site
              such as performance and SEO. When it comes to design, i always
              find it important to get understanding of the website i'm going to
              build by creating a wireframe of the template, then designing the
              site and its pages on a design tool such as Figma or Adobe XD.
            </p>
            <p className="about__content--info">
              I am currently in my 3rd year as a UWE (University of the West of
              England) studying{" "}
              <a
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tpdegrees.com/degrees/courses-placements-jobs/universities-list-itmb/"
                alt="ITMB Link"
              >
                ITMB
              </a>
              . It's a great course which gives students a 50/50 split between
              between Business Management and IT, the best of both worlds in my
              opinion. IT and Business Management are essential day-to-day
              operations for businesses and being able to understand both sides
              will allow you to become an instrumental part of any business you
              go into.
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
                fluid={data.profile.childImageSharp.fluid}
              />
            </div>
            <p className="about__content--info">
              Outside of work, you'll catch me in the gym for the most part as i
              love staying fit and active. It helps to keep my body and mind in
              shape which is important for anyone wanting to get the best out of
              themselves. I always try and keep a good work-life balance by
              spending time with friends and family.
            </p>
            <div className="stack">
              <h4>Here are my current tech stack:</h4>
              <div className="stack-items">
                <div className="stakco">
                  <FaHtml5 className="stack-icons" />
                  <p>HTML</p>
                </div>
                <div className="stacko">
                  <FaCss3Alt className="stack-icons" />
                  <p>CSS</p>
                </div>
                <div className="stacko">
                  <FaSass className="stack-icons" />
                  <p>SASS</p>
                </div>
                <div className="stacko">
                  <FaReact className="stack-icons" />
                  <p>React</p>
                </div>
                <div className="stacko">
                  <SiGatsby className="stack-icons" />
                  <p>Gatsby</p>
                </div>
                <div className="stacko">
                  <FaElementor className="stack-icons" />
                  <p>Elementor</p>
                </div>
                <div className="figma">
                  <FaFigma className="stack-icons" />
                  <p>Figma</p>
                </div>
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
