import React from 'react'

import { SliceContainer, Content, Title, Paragraph } from './StyledComponents'

const TextWithTitle = ({ slice }) => {
  return (
    <SliceContainer>
      <Content>
        <Title>{slice.primary.title1[0].text}</Title>
        {slice.primary.body.map((p, index) => (
          <Paragraph key={index}>{p.text}</Paragraph>
        ))}
      </Content>
    </SliceContainer>
  )
}

export default TextWithTitle
