import React from 'react'
import styled from 'styled-components'
import { ImageWithCaption, TextWithTitle, List, ImageText } from './slices'

const SliceContainer = styled.div``

const SliceZone = ({ slices }) => {
  const sliceComponents = {
    PRISMIC_ProjectBodyImage_with_Caption: ImageWithCaption,
    PRISMIC_ProjectBodyText_with_title: TextWithTitle,
    PRISMIC_ProjectBodyList: List,
    PRISMIC_ProjectBodyImage_text: ImageText
  }
  return (
    slices &&
    slices.map((slice, index) => {
      const SliceComponent = sliceComponents[slice.__typename]
      if (SliceComponent) {
        return <SliceComponent slice={slice} key={`slice-${index}`} />
      }
      return null
    })
  )
}

export default SliceZone
