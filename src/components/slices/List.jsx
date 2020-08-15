import React from 'react'

import { SliceContainer, Content, Title } from './StyledComponents'

const List = ({
  slice: {
    primary: { title1, list }
  }
}) => {
  return (
    <SliceContainer>
      <Content>
        <Title>{title1[0].text}</Title>
        {list.map((li, index) => (
          <div key={index}>
            {index + 1}. {li.text}
          </div>
        ))}
      </Content>
    </SliceContainer>
  )
}

export default List
