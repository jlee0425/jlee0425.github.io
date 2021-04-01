import React from "react";
import styled from "styled-components";

const MenuItem = ({ children, delay, onClick }) => {
  return (
    <Item delay={delay} onClick={onClick}>
      {children}
    </Item>
  );
};

const Item = styled.div`
  cursor: pointer;
  &:hover {
    color: blue;
  }
  > * {
    color: whitesmoke;
  }
`;

export default MenuItem;
