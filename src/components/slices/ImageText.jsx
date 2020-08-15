import React from 'react'

import {
  SliceContainer,
  Content,
  Title,
  Paragraph,
  ImgSection,
  ImgContainer,
  StyledImg,
  AltText
} from './StyledComponents'

const ImageText = ({
  slice: {
    primary: { title1 },
    fields
  }
}) => {
  const imgs = [fields[0].img1, fields[0].img2]
  return (
    <SliceContainer>
      <Content>
        <ImgSection>
          {imgs.map((image, i) => {
            return image ? (
              <ImgContainer key={i}>
                <StyledImg src={image.url} />
                <AltText>{image.alt}</AltText>
              </ImgContainer>
            ) : null
          })}
        </ImgSection>
        <Title>{title1[0].text}</Title>
        {fields[0].content.map((p, index) => (
          <Paragraph key={index}>{p.text}</Paragraph>
        ))}
      </Content>
    </SliceContainer>
  )
}

export default ImageText
