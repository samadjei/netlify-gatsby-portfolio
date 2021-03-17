import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"
import SEO from "../components/SEO"

const Contacts = () => {
  return (
    <Layout>
      <section className="contacts container">
        <Title title={"Contact Me"} className="contact--title" />
        <SEO title="Contact" description="You can contact Sam Adjei via email form, Twitter or LinkedIn"/>
        <p className="contact--sub">
          Get in touch with me, i am currently available for{" "}
          <span className="contact--hire">hire</span>!
        </p>
        <p className="contact--sub2">
          You can also contact me on{", "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/samkadjei"
          >
            <span className="twitter">Twitter</span>
          </a>
          {", "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://uk.linkedin.com/in/samuel-adjei?trk=people-guest_people_search-card"
          >
            <span className="twitter">LinkedIn</span>
          </a>
          {", "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/samadjeiltd/"
          >
            <span className="twitter">Instagram</span>
          </a>
          .
        </p>

        <div className="contact">
          <form
            name="contact v1"
            method="POST"
            data-netlify="true"
            onSubmit="submit"
          >
            {/* Business Type */}
            <div className="options">
              <h3 className="options--title">What type of business are you?</h3>
              <div className="form__business">
                <label htmlFor="choice-1">
                  <input
                    type="radio"
                    name="type"
                    class="card-input-element"
                    value="individual"
                    id="choice-1"
                  />

                  <div class="card-input">
                    <div class="panel-heading">Individual</div>
                  </div>
                </label>
                <label htmlFor="choice-2">
                  <input
                    type="radio"
                    name="type"
                    class="card-input-element"
                    value="business"
                    id="choice-2"
                  />

                  <div class="card-input">
                    <div class="panel-heading">Business</div>
                  </div>
                </label>
                <label htmlFor="choice-3">
                  <input
                    type="radio"
                    name="type"
                    class="card-input-element"
                    value="agency"
                    id="choice-3"
                  />

                  <div class="card-input">
                    <div class="panel-heading">Agency</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Project Scope */}
            <div className="second-op">
              <h3 className="options--title">Project Scope</h3>
              <div className="form__business">
                <label>
                  <input
                    type="checkbox"
                    className="card-input-element"
                    name="design"
                    value="web design"
                  />
                  <div className="panels card-input">Web Design</div>
                </label>
                <label>
                  <input
                    type="checkbox"
                    className="card-input-element"
                    name="development"
                    value="web development"
                  />
                  <div className="card-input">Web Development</div>
                </label>
                <label>
                  <input
                    type="checkbox"
                    className="card-input-element"
                    name="maintenance"
                    value="web maintenance"
                  />
                  <div className="card-input">Web Maintenance</div>
                </label>
              </div>
            </div>

            {/* User Inputs */}
            <input type="hidden" name="form-name" value="contact v1" />
            <div className="contact__info">
              <label className="label" htmlFor="name">
                Name*
              </label>
              <input type="text" name="name" placeholder="John Doe" />
            </div>
            <div className="contact__info">
              <label className="label" htmlFor="email">
                Email*
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="john.doe@gmail.com"
              />
            </div>
            <div className="contact__info">
              <label className="label" htmlFor="message">
                Message*
              </label>
              <textarea
                for="message"
                name="message"
                rows="5"
                required="required"
                placeholder="Enter your message here..."
              ></textarea>
            </div>
            <button className="btn btn--desktop contact__submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default Contacts
