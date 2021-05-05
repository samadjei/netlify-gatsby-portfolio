import React from "react"
import Title from "./Title"

const Contact = ({ title }) => {
  return (
    <section id="contact" className="container">
      <Title title={title} className="contact--title" />
      <p className="contact--sub">
        Get in touch with me, i am currently available for{" "}
        <span className="contact--hire">hire</span>!
      </p>

      <div className="contact">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit="submit"
        >
          {/* User Inputs */}
          <input type="hidden" name="form-name" value="contact" />
          <div className="contact__info">
            <label className="label" htmlFor="name">
              Name*
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              required="required"
            />
          </div>
          <div className="contact__info">
            <label className="label" htmlFor="company">
              Company
            </label>
            <input type="text" name="company" placeholder="Company" />
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
              required="required"
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
              required="required"
            ></textarea>
          </div>
          <button className="btn btn--desktop contact__submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
