import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import ProjectCard from '../components/projectCard'
import projectList from '../data/projects.json'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-gap: 1rem;
  height: 80vh;
  padding: 8vh 0;
  align-items: center;
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
              image: image.node.childImageSharp,
              library: project.library
            }
            return <ProjectCard data={data} key={project.name} />
          })}
      </Container>
    </>
  )
}

export default Projects
