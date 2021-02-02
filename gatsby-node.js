const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      blogs: allStrapiBlogs {
        nodes {
          slug
        }
      }
    }
  `)

  // everytime we click on a blog, it programatically runs the page
  result.data.blogs.nodes.forEach(blog => {
    createPage({
      path: `/blogs/${blog.slug}`,
      component: path.resolve(`src/templates/BlogTemplate.js`),
      context: {
        slug: blog.slug,
      },
    })
  })
}
