import React from 'react'

import {
  SliceContainer,
  ImgSection,
  StyledImg,
  ImgContainer,
  AltText
} from './StyledComponents'

const ImageWithCaption = ({ slice }) => {
  return (
    <SliceContainer>
      <ImgSection>
        <ImgContainer>
          <StyledImg src={slice.url} />
          <AltText>{slice.alt}</AltText>
        </ImgContainer>
      </ImgSection>
    </SliceContainer>
  )
}

export default ImageWithCaption
