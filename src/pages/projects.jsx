import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import ProjectCard from '../components/projectCard'
import projectList from '../data/projects.json'
import SEO from '../components/seo'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-gap: 1rem;
  align-items: center;
  padding-top: 8vh;
  height: 89vh;
  overflow: auto;
`
const Projects = ({ location }) => {
  const {
    projectImages: { edges }
  } = useStaticQuery(graphql`
    query {
      projectImages: allFile(
        filter: { relativePath: { regex: "/projects/" } }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 340) {
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
      image => image.node.relativePath === `projects/${project.img}`
    )
    const data = {
      title: project.name,
      url: project.url || null,
      git: project.git,
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
