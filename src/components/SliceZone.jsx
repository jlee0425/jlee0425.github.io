import React from 'react'
import { ImageWithCaption, TextWithTitle, List, ImageText } from './Slices'
import { Separator } from './Slices/StyledComponents'

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
        return (
          <div key={`slice-${index}`}>
            <Separator />
            <SliceComponent slice={slice} />
          </div>
        )
      }
      return null
    })
  )
}

export default SliceZone
