import React, { useEffect } from "react"
import Title from "./Title"
import { gsap, Power3 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Services = ({ title }) => {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "services",
        // start: 'top'
        markers: true,
      },
    })

    tl.from(".top-animation", {
      y: 200,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 0.5,
      duration: 1.5,
    }).from(
      ".second-animation",
      {
        y: 200,
        opacity: 0,
        ease: Power3.easeOut,
        duration: 1.5,
      },
      "-=0.5"
    )
  })

  return (
    <section className="services container">
      <Title title={title} className="title" />
      <div className="services__grid">
        <div className="services__content top-animation">
          <div>
            <span>0.1</span>
            <h3>Web Design</h3>
            <p>
              I will use your feedback to provide you with a modern design of
              what your website could look like. Different iterations can be
              created until find the most suitable design has been agreed.
            </p>
          </div>
        </div>
        <div className="services__content top-animation">
          <div>
            <span>0.2</span>

            <h3>Web Development</h3>
            <p>
              After the design has been agreed,i will develop the website with
              the latest web technologies to ensure your site is modern,
              responsive and scalable to meet all your business requirements.
            </p>
          </div>
        </div>
        <div className="services__content second-animation">
          <div>
            <span>0.3</span>

            <h3>SEO</h3>
            <p>
              Good SEO is an integral part of any online business to generate
              organic traffic. I will ensure that your website is SEO optimise
              to maximise its potential outreach to your future clients.
            </p>
          </div>
        </div>
        <div className="services__content second-animation">
          <div>
            <span>0.4</span>
            <h3>Content Management</h3>
            <p>
              I will provide you with the means of managing the content of your
              site to give you the ability to continuously update your site. I
              also offer a retainer package if you prefer me to maintain the
              site for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
