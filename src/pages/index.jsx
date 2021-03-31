import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import { Seo, useViewWidth } from "../components";
import Projects from "../components/Projects";

const Background = styled(Img)`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: -1;
  opacity: 0.5;
  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: "object-fit: cover !important; object-position: 0% 0% !important;";
  }
  @media screen and (max-width: 600px) {
    height: ${({ mobileHeight }) => mobileHeight};
  }
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 75px;
`;
const Name = styled.h1`
  margin-top: 0;
  font-size: 3rem;
  background: linear-gradient(270deg, #29323c, #485563);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Avatar = styled(Img)`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  box-shadow: 1px 1px 2px lightgrey;
`;
const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const H5 = styled.h5`
  text-align: center;
  text-shadow: 0.2px 0.2px #29323c;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 1px;
  margin: 1rem;
`;

const IndexPage = ({ location }) => {
  const {
    allFile: { edges },
  } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { in: "main" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            name
          }
        }
      }
    }
  `);
  const viewWidth = useViewWidth();
  const [projectLength, setProjectLength] = useState(viewWidth > 768 ? 3 : 2);
  const coverImg = edges.find(edge => edge.node.name === "coverImg");
  const avatarImg = edges.find(edge => edge.node.name === "avatar");

  useEffect(() => {
    setProjectLength(viewWidth > 768 ? 3 : 2);
  }, [viewWidth]);
  return (
    <>
      <Seo title="Home" />
      <Background fluid={coverImg.node.childImageSharp.fluid} />
      <Main>
        <Avatar fluid={avatarImg.node.childImageSharp.fluid} />
        <h1 style={{ marginBottom: "0" }}>Hello, World!</h1>
        <Name>I'm Jake.</Name>
        <H5>SOME OF MY LATEST WORK</H5>
        <Cards>
          <Projects cardSize="25vh" length={projectLength} />
        </Cards>
      </Main>
    </>
  );
};

export default IndexPage;
