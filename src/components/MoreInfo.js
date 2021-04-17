import React from "react"
import Title from "./Title"

const MoreInfo = ({ title }) => {
  
  return (
    <section className="container moreInfo">
      <Title title={title} className="title" />
      <ul className="hire">
        <li className="hire--reasons hire1">
          <span>1.</span> Provide your website with the love and attention it
          needs if it has been neglected.
        </li>
        <li className="hire--reasons hire2">
          <span>2.</span> I help small businesses generate more leads through
          organic SEO.
        </li>
        <li className="hire--reasons hire3">
          <span>3.</span> Already have your design? I can provide you with a
          pixel-perfect development of the web design.
        </li>
        <li className="hire--reasons hire4">
          <span>4.</span> I am reliable, transparent, and a good communicator,
          ensuring the project runs as smoothly as possible.
        </li>
        <li className="hire--reasons hire5">
          <span>5.</span> Available for future work once the scope of your
          project has been fulfilled.
        </li>
        <li className="hire--reasons hire6">
          <span>6.</span> Looking to update your ageing site? I work with the
          latest web technologies available which includes: HTML, (S)CSS,
          JavaScript, React and Elementor to ensure your site gets that modern
          touch.
        </li>
      </ul>
    </section>
  )
}

export default MoreInfo
