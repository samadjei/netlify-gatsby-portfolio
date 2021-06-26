import React from "react"

import Navbar from "./Navbar"
import Footer from "./Footer"
import Subscription from "./Subscription"

// Put components that will stay constant on all pages
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* contents of the page will be rendered in the children prop */}
      {children}
      <Subscription />
      <Footer />
    </>
  )
}

export default Layout
