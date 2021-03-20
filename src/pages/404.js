import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO
        title="Dead End"
        description="This page does not exist, please go back"
      />
      <main className="error container">
        <div className="error__container">
          <h1 className="error__header">
            He! You've reached a dead end. This page does not exist
          </h1>
          <div className="conain">
            <img
              src="https://media.giphy.com/media/VwoJkTfZAUBSU/giphy.gif"
              alt="404 GIF by Mathew Lucas"
            />
          </div>

          <Link to="/" className="btn">
            Go back home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
