import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import ProjectCard from "./ProjectCard";
import projectList from "../../data/projects.json";

const Projects = ({ length, cardSize }) => {
  const {
    projectImages: { edges },
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
  `);
  const projects = projectList.slice(0, length).map(project => {
    const image = edges.find(
      image => image.node.relativePath === `thumbnails/${project.thumbnail}`
    );
    const data = {
      ...project,
      url: project.url || null,
      image: image.node.childImageSharp.fluid,
    };
    return { ...data };
  });
  return projects.map(project => (
    <ProjectCard data={project} key={project.title} cardSize={cardSize} />
  ));
};

export default Projects;
