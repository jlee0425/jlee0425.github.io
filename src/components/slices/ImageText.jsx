import React from 'react'
import styled from 'styled-components'

import { SliceContainer, Content, Title, Paragraph } from './StyledComponents'

const ImageText = ({
  slice: {
    primary: { title1 },
    fields
  }
}) => {
  return (
    <SliceContainer>
      <Content>
        <Title>{title1[0].text}</Title>
        {fields[0].content.map((p, index) => (
          <Paragraph key={index}>{p.text}</Paragraph>
        ))}
      </Content>
    </SliceContainer>
  )
}

export default ImageText
