import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"


const Projects = ({ title, projects, showLink }) => {
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
