const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  try {
    const pages = await graphql(`
      {
        allPrismicProjectDetail {
          edges {
            node {
              id
              uid
            }
          }
        }
      }
    `)
    const template = path.resolve('src/templates/detail.jsx')

    pages.data.allPrismicProjectDetail.edges.forEach(edge => {
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
