import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl: url
        siteTitle: title
        twitterUsername
      }
    }
  }
`
const SEO = ({ title, url, description }) => {
	const { site } = useStaticQuery(query)
	const {
	  siteDesc,
	  siteTitle,
		siteUrl,
	  author,
	  image,
	  twitterUsername,
	} = site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={` ${siteTitle} | ${author}`}>
      <meta name="description" content={description} />
		<meta name="image" content={image} />
		<meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
		<meta name="og:image" content={`${siteUrl}${image}`} />


      {/* twitter cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
		<meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
	 
  )
}
export default SEO
