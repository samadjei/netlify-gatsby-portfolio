import React, { Component } from "react"
import { Link } from "gatsby"
import SocialLinks from "../constants/SocialLinks"
import { Button } from "./Button"

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    // set click to the opposite value whenever you click it
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <>
        <nav className={this.state.clicked ? "navbar active" : "navbar"}>
          <div className="stay-fixed"></div>
          <div className="navbar__container">
            <div className="navbar--logo">
              <Link to="/">
                <h3>Sam Adjei</h3>
              </Link>
            </div>
            <div className="navbar__links">
              <button
                onClick={this.handleClick}
                className={`hamburger menu-icon hamburger--collapse-r ${
                  this.state.clicked ? "is-active" : "hamburger"
                }`}
                type="button"
              >
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
              <div className="navbar__menus">
                <ul className={this.state.clicked ? "menu active" : "menu"}>
                  <li className="menu__item">
                    <Link to="/Work" className="menu--links">
                      Work
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link to="/About" className="menu--links">
                      About
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link to="/Blog" className="menu--links">
                      Blog
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link to="/Contacts" className="menu--links-mobile">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-icons">
                    <SocialLinks />
                  </li>
                </ul>
              </div>
              <Link id="cta" to="/Contacts">
                <Button
                  className="btn btn-nav"
                  buttonStyle="btn--outline"
                  buttonSize="btn--tablet"
                >
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar
