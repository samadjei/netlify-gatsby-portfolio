import React from "react"
import Title from "./Title"

const MoreInfo = ({ title }) => {
  return (
    <section className="container moreInfo">
      <Title title={title} />
      <ul className="hire">
        <li className="hire--reasons">
          <span>1.</span> Provide your website with a new lease of life if it is
          currently not up to scratch.
        </li>
        <li className="hire--reasons">
          <span>2.</span> Worked with small businesses to succesfully deliver
          their projects/.
        </li>
        <li className="hire--reasons">
          <span>3.</span> Already have you design? I can provide you with a
          pixel-perfect development of the web design.
        </li>
        <li className="hire--reasons">
          <span>4</span> I am reliable, transparent, and a good communicator,
          ensuring the project runs as fluid as possible
        </li>
        <li className="hire--reasons">
          <span>5.</span> Available for future work once the scope of your
          project has been fulifilled.
        </li>
        <li className="hire--reasons">
          <span>6.</span> Looking to update your site? I work with the latest
          web technologies available which includes: HTML, (S)CSS, JavaScript,
          React, Elementor and PHP to ensure your site gets that modern touch.
        </li>
      </ul>
    </section>
  )
}

export default MoreInfo
