import React from "react";
import styled from "styled-components";

const Item = styled.div`
  cursor: pointer;
  &:hover {
    color: blue;
  }
  > * {
    color: whitesmoke;
  }
`;

const MenuItem = ({ children, delay, onClick }) => {
  return (
    <Item delay={delay} onClick={onClick}>
      {children}
    </Item>
  );
};

export default MenuItem;
