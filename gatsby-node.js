const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  try {
    const pages = await graphql(`
      {
        allPrismicProject {
          edges {
            node {
              uid
            }
          }
        }
      }
    `)
    const template = path.resolve('src/templates/ProjectDetail.jsx')

    pages.data.allPrismicProject.edges.forEach(edge => {
      createPage({
        path: `/projects/${edge.node.uid}`,
        component: template,
        context: {
          uid: edge.node.uid
        }
      })
    })
  } catch (error) {
    console.log(error)
  }
}
