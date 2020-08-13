import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import ProjectCard from '../components/projectCard'
import projectList from '../data/projects.json'
import SEO from '../components/seo'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 7vh;
  flex-wrap: wrap;
  height: 100%;
  padding-bottom: 3vh;
`
const Projects = ({ location }) => {
  const {
    projectImages: { edges }
  } = useStaticQuery(graphql`
    query {
      projectImages: allFile(
        filter: { relativePath: { regex: "/thumbnails/" } }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 480) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const projects = projectList.map(project => {
    const image = edges.find(
      image => image.node.relativePath === `thumbnails/${project.thumbnail}`
    )
    const data = {
      ...project,
      url: project.url || null,
      image: image.node.childImageSharp.fluid
    }
    return { ...data }
  })
  return (
    <>
      <SEO title='Projects' />
      <Container>
        {projects.map(project => (
          <ProjectCard data={project} key={project.title} />
        ))}
      </Container>
    </>
  )
}

export default Projects
