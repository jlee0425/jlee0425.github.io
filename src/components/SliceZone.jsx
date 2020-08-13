import React from 'react'
import { PrismicImage, TextWithTitle, List, ImageText } from './slices'

const SliceZone = ({ slices }) => {
  const sliceComponents = {
    image_with_caption: PrismicImage,
    text_with_title: TextWithTitle,
    list: List,
    image_text: ImageText
  }

  return slices.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.type]
    if (SliceComponent) {
      return <SliceComponent slice={slice} key={`slice-${index}`} />
    }
    return null
  })
}

export default SliceZone
