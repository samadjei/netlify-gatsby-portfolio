import React from "react"
import Title from "./Title"

const MoreInfo = ({ title }) => {
  return (
    <section className="container moreInfo">
      <Title title={title} className="title" />
      <ul className="hire">
        <li className="hire--reasons">
          <span>1.</span> Provide your website with the love and attention it
          needs if it has been neglected.
        </li>
        <li className="hire--reasons">
          <span>2.</span> I help small buisnesses generate more leads with
          organic SEO.
        </li>
        <li className="hire--reasons">
          <span>3.</span> Already have your design? I can provide you with a
          pixel-perfect development of the web design.
        </li>
        <li className="hire--reasons">
          <span>4.</span> I am reliable, transparent, and a good communicator,
          ensuring the project runs as smoothly as possible. 
			 {/* Don't beleive me? */}
          {/* <a href="#testimonials" className="underline" alt="testimonials link">
            See what others have to say.
          </a> */}
        </li>
        <li className="hire--reasons">
          <span>5.</span> Available for future work once the scope of your
          project has been fulifilled.
        </li>
        <li className="hire--reasons">
          <span>6.</span> Looking to update your site ageing site? I work with
          the latest web technologies available which includes: HTML, (S)CSS,
          JavaScript, React, Elementor and PHP to ensure your site gets that
          modern touch.
        </li>
      </ul>
    </section>
  )
}

export default MoreInfo
