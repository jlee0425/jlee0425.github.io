import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Head } from '../components/slices'
import SliceZone from '../components/SliceZone'

const Container = styled.div`
  height: 100%;
  padding: 7vh 5vh 3vh 5vh;
`

const ProjectDetail = ({ data: { prismicProjectDetail } }) => {
  const { data } = prismicProjectDetail
  const headerData = {
    ...data.title.text,
    ...data.date.text,
    ...data.summary.text,
    ...data.git.url,
    ...data.link.url
  }
  return (
    <Container>
      <Head data={headerData} />
      <SliceZone slices={data.body1} />
    </Container>
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
