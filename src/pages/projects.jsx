import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import ProjectCard from '../components/projectCard'
import projectList from '../data/projects.json'

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
  console.log('location', location)

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
  return (
    <>
      <Container>
        {edges &&
          projectList.map(project => {
            const image = edges.find(
              image => image.node.relativePath === `projects/${project.img}`
            )
            const data = {
              title: project.name,
              url: project.url || null,
              git: project.git,
              image: image.node.childImageSharp.fluid,
              library: project.library
            }
            return <ProjectCard data={data} key={project.name} />
          })}
      </Container>
    </>
  )
}

export default Projects
