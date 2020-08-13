import React from 'react'
import { graphql } from 'gatsby'

const ProjectDetail = ({ data: { prismicProjectDetail } }) => {
  const { data } = prismicProjectDetail
  return (
    <>
      <h1>{data.title.text}</h1>
    </>
  )
}

export default ProjectDetail

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicProjectDetail(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
      }
    }
  }
`
