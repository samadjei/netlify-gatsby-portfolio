import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"
import SEO from "../components/SEO"

const Contacts = () => {
  return (
    <Layout>
      <section id="hire" className="container">
        <Title title={"Contact Me"} className="contact--title" />
        <SEO title="Contact" />
        <p className="contact--sub">
          Get in touch with me, i am currently available for{" "}
          <span className="contact--hire">hire</span>!
        </p>
        <p className="contact--sub2">
          You can also contact me on{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/samkadjei"
          >
            {" "}
            <span className="twitter">Twitter</span>
          </a>{" "}
        </p>

        <div className="contact">
          <form
            name="contact v1"
            method="POST"
            data-netlify="true"
            onSubmit="submit"
          >
            <input type="hidden" name="form-name" value="contact v1" />
            <div className="contact__info">
              <label className="label" htmlFor="name">
                Name
              </label>
              <input type="text" name="name" placeholder="John Doe" />
            </div>
            <div className="contact__info">
              <label className="label" htmlFor="email">
                Email
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
                Message
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
