import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Head } from '../components/slices'
import SliceZone from '../components/SliceZone'

const Container = styled.div`
  height: 100%;
  margin-top: 5vh;
  padding: 0 10rem;

  @media (max-width: 1024px) {
    padding: 0 2rem;
  }
`

const ProjectDetail = ({ data: { prismicProject } }) => {
  const { data } = prismicProject
  console.log('data', data)
  return (
    <Container>
      <Head
        title={data.title[0]?.text}
        date={data.date[0]?.text}
        summary={data.summary[0]?.text}
        git={data.git?.url}
        link={data.link?.url}
      />
      <SliceZone slices={data?.body} />
    </Container>
  )
}

export default ProjectDetail

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
      data {
        date {
          text
        }
        git {
          url
        }
        link {
          url
        }
        preview {
          url
        }
        summary {
          text
        }
        title {
          text
        }
        body {
          primary {
            body {
              text
            }
            caption {
              text
            }
            image {
              url
            }
            list {
              text
            }
            title1 {
              text
            }
          }
          items {
            content {
              text
              type
            }
            img1 {
              url
            }
            img2 {
              url
            }
          }
          slice_type
        }
      }
    }
  }
`
