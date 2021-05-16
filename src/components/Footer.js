import React from "react"
import { Link } from "gatsby"
import { SiInstagram } from "react-icons/si"
import { SiTwitter } from "react-icons/si"
import { SiLinkedin } from "react-icons/si"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__left">
            <h3 className="footer--titles white">Samuel Adjei</h3>
            <h4 className="footer--subhead white">
              Freelance Web Designer & Developer
            </h4>
            <p className=" footer--info white">
              I'm a Freelance Web Developer based in Slough. I work remotely,
              providing web developer/design services to businesses around the
              UK. If you have an upcoming project you'd like to discuss, please
              get in{" "}
              <Link className="underline white" to="/Contacts">
                touch
              </Link>
              .
            </p>
          </div>
          <div className="footer__center">
            <h3 className="footer--titles white">Quick Links</h3>
            <ul>
              <li className="footer--links">
                <Link className="white" to="/Work">
                  Work
                </Link>
              </li>
              <li className="footer--links">
                <Link className="white" to="/About">
                  About
                </Link>
              </li>
              <li className="footer--links">
                <Link className="white" to="/Blog">
                  Blog
                </Link>
              </li>
              <li className="footer--links">
                <Link className="white" to="/Contacts">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__right">
            <div className="footer__contact">
              <h3 className="footer--titles white">Contact</h3>
              <p className="white">info.samadjei@gmail.com</p>
            </div>
            <div className="footer__social">
              <h3 className="footer--titles white">Socials</h3>
              <a
                className="socials__outer"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/samkadjei"
                alt="twitter link"
                aria-label="Twitter"
              >
                <SiTwitter className="socials--inner white" />
              </a>
              <a
                className="socials__outer"
                target="_blank"
                rel="noopener noreferrer"
                href="https://uk.linkedin.com/in/samuel-adjei?trk=people-guest_people_search-card"
                alt="linkedin link"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="socials--inner white" />
              </a>
              <a
                className="socials__outer white"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/samadjeiltd/"
                alt="instagram link"
                aria-label="Instagram"
              >
                <SiInstagram className="socials--inner" />
              </a>
            </div>
          </div>
        </div>
        <p className="footer--name white">
          &copy; {new Date().getFullYear()} Samuel Adjei Ltd - Feelance Web
          Developer - All Rights Reserved.{" "}
        </p>
      </div>
    </footer>
  )
}

export default Footer
