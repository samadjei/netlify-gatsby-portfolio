import React from "react"
import { SiGithub } from "react-icons/si"
import { SiLinkedin } from "react-icons/si"
import { SiInstagram } from "react-icons/si"
import { SiTwitter } from "react-icons/si"

function socialLinks() {
  return (
    <ul className="menu__socials">
      <li className="menu__social">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/samadjei"
          alt="github link"
        >
          <SiGithub className="social-item" />
        </a>
      </li>
      <li className="menu__social">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://uk.linkedin.com/in/samuel-adjei?trk=people-guest_people_search-card"
          alt="linkedin link"
        >
          <SiLinkedin className="social-item" />
        </a>
      </li>
      <li className="menu__social">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/samadjeiltd/"
          alt="instagram link"
        >
          <SiInstagram className="social-item" />
        </a>
      </li>
      <li className="menu__social">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/samkadjei"
          alt="twitter link"
        >
          <SiTwitter className="social-item" />
        </a>
      </li>
    </ul>
  )
}

export default socialLinks
