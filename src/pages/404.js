import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <Layout>
      <Seo
        title="Dead End"
        description="This page does not exist, please go back"
      />
      <main className="error container">
        <div className="error__container">
          <h1 className="error__header">
            Hey! You've reached a dead end. This page does not exist
          </h1>
          <div className="error__gif">
            <img
              src="https://media.giphy.com/media/VwoJkTfZAUBSU/giphy.gif"
              alt="404 GIF by Mathew Lucas"
            />
          </div>
          <div className="error-btn">
            <Link to="/" className="btn ">
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Error
