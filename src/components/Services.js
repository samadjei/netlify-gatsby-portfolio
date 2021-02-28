import React from "react"
import Title from "./Title"

const Services = ({ title }) => {

  return (
    <section className="services container">
      <Title title={title} className="title" />
      <div className="services__grid">
        <div className="services__content">
          <div>
            <span>0.1</span>
            <h3>Web Design</h3>
            <p>
              I will use your feedback upon our conversation to provide you with
              a modern design of what your website could look like. Different
              iterations can be created until find the most suitable design.
            </p>
          </div>
        </div>
        <div className="services__content">
          <div>
            <span>0.2</span>

            <h3>Web Development</h3>
            <p>
              Up an agreed design, i will develop the website with the latest
              web technologies to ensure your site is modern, responsive and
              scalable to meet all your business requirements.
            </p>
          </div>
        </div>
        <div className="services__content">
          <div>
            <span>0.3</span>

            <h3>SEO</h3>
            <p>
              Good SEO is an intergral part of any online business to generate
              organic traffic. I will ensure that your website is SEO optimise
              to maxmise its potential output to your future clients.
            </p>
          </div>
        </div>
        <div className="services__content">
          <div>
            <span>0.4</span>
            <h3>Content Management</h3>
            <p>
              I will provide you with the means of managing the content of your
              site to give you the ability to continuosly update your site. I
              also offer a retainer package if you prefer not having to maintain
              the site.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
