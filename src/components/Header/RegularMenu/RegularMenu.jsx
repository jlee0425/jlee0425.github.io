import React from "react";
import styled from "styled-components";
import Menu from "../Menu";

const RegularMenu = ({ handleClick }) => {
  return (
    <Container>
      <Menu handleClick={handleClick} isBurger={false} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 2.5rem;
  font-weight: 700;
  font-size: 1.3rem;

  > * {
    &:not(:first-child) {
      margin-left: 2rem;
    }
  }
`;

export default RegularMenu;
