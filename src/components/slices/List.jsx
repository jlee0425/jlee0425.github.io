import React from "react";

import { SliceContainer, Content, Title } from "./StyledComponents";

const List = ({
  slice: {
    primary: { title1, list },
  },
}) => {
  return (
    <SliceContainer>
      <Content>
        <Title>{title1[0].text}</Title>
        {list.map((item, i) => (
          <li key={i}>{item.text}</li>
        ))}
      </Content>
    </SliceContainer>
  );
};

export default List;
