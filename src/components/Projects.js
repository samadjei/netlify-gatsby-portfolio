import React, { useEffect } from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import { gsap, Power3 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
const Projects = ({ title, projects, showLink }) => {
	useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
				trigger: "project",
      },
    })

    tl.from(".project__img", {
      y: 200,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 0.5,
      duration: 1.5,
    })
  })
  return (
    <section className="pj container">
      <Title title={title} />
      {/* iterate over and spread out the projects  */}
      <div className="project-center">
        {projects.map(project => {
          return <Project key={project.id} {...project} />
        })}
      </div>
      {showLink && (
        <div className="link">
          <Link className="link--inner" to="/Work">
            View More Projects
          </Link>
        </div>
      )}
    </section>
  )
}

export default Projects
