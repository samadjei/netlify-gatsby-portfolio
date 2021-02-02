import React from "react"
import Title from "./Title"

import Design from "../assets/svg/services/design.svg"
import Develop from "../assets/svg/services/develop.svg"
import SEO from "../assets/svg/services/seo.svg"
import Launch from "../assets/svg/services/launch.svg"

const Services = ({ title }) => {
  return (
    <section className="services">
      <Title title={title} />
      <div className="services__grid">
        <div className="services__content">
          <div className="icon">
            <img
              width="150"
              height="150"
              className="icon--size"
              src={Design}
              alt="Design"
            />
          </div>
          <div className="services__details">
            <h3>Web Design</h3>
            <p>
              I will provide you with a clean and modern design of what your
              website could look like before development to set your
              expectations.{" "}
            </p>
          </div>
        </div>
        <div className="services__content">
          <div className="icon">
            <img
              width="150"
              height="150"
              className="icon--size"
              src={Develop}
              alt="Design"
            />
          </div>
          <div>
            <h3>Web Development</h3>
            <p>
              I develop bespoke websites with the latest web tehcnologies to
              ensure your site is modern, responsive and scalable to meet all
              your business needs.
            </p>
          </div>
        </div>
        <div className="services__content">
          <div className="icon">
            <img
              width="150"
              height="150"
              className="icon--size"
              src={SEO}
              alt="Design"
            />
          </div>
          <div>
            <h3>SEO</h3>
            <p>
              Good SEO is an intergral part of any online business to allow a
              site to generate organic traffic. I will ensure that your website
              is SEO optimise to maxmise its potential.
            </p>
          </div>
        </div>
        <div className="services__content">
          <div className="icon">
            <img
              width="150"
              height="150"
              className="icon--size"
              src={Launch}
              alt="Design"
            />
          </div>
          <div>
            <h3>Content Management</h3>
            <p>
              I will provide you with a clean and modern design of what your
              website could look like before development to set your
              expectations.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
