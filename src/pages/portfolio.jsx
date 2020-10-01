import React from "react";
import styled from "styled-components";

import { SEO } from "../components";
import Projects from "../components/Projects";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 80%;
  padding: 75px;
`;
const Portfolio = ({ location }) => {
  return (
    <>
      <SEO title="Portfolio" />
      <Container>
        <Projects cardSize="40vh" />
      </Container>
    </>
  );
};

export default Portfolio;
