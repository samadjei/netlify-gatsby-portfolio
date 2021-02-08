import React from "react"
import { FiGithub } from "react-icons/fi"
import { FiLinkedin } from "react-icons/fi"
import { FiInstagram } from "react-icons/fi"
import { FiTwitter } from "react-icons/fi"

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
          <FiGithub className="social-item" />
        </a>
      </li>
      <li className="menu__social">
        <a
          target="_blank"
          rel="noopener noreferrer"
				  href=" www.linkedin.com/in/samuel-adjei"
				  alt="linkedin link"
        >
          <FiLinkedin className="social-item" />
        </a>
      </li>
      <li className="menu__social">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/samadjeiltd/"
			 alt="instagram link"
        >
          <FiInstagram className="social-item" />
        </a>
      </li>
      <li className="menu__social">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/samkadjei"
			 alt="twitter link"
        >
          <FiTwitter className="social-item" />
        </a>
      </li>
    </ul>
  )
}

export default socialLinks
