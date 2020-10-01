import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import SEO from "../components/SEO"
import { Head } from "../components/Slices"
import SliceZone from "../components/SliceZone"

const Container = styled.div`
  height: 100%;
  padding: 75px 10rem;

  @media (max-width: 1024px) {
    padding: 75px 2rem;
  }
`

const Project = ({ data: { prismic } }) => {
  const { project: data } = prismic

  return (
    <>
      <SEO title={`${data.title[0].text}`} />
      <Container>
        <Head
          title={data.title[0]?.text}
          date={data.date[0]?.text}
          summary={data.summary[0]?.text}
          git={data.git?.url}
          link={data.link?.url}
          preview={data.preview}
        />
        <SliceZone slices={data?.body} />
      </Container>
    </>
  )
}

export default Project

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismic {
      project(lang: "en-us", uid: $uid) {
        link {
          ... on PRISMIC__ExternalLink {
            url
          }
        }
        git {
          ... on PRISMIC__ExternalLink {
            url
          }
        }
        date
        body {
          ... on PRISMIC_ProjectBodyImage_text {
            primary {
              title1
            }
            fields {
              img2
              img1
              content
            }
          }
          ... on PRISMIC_ProjectBodyList {
            primary {
              list
              title1
            }
          }
          ... on PRISMIC_ProjectBodyImage_with_caption {
            primary {
              imageSharp {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              caption
            }
          }
          ... on PRISMIC_ProjectBodyText_with_title {
            primary {
              title1
              body
            }
          }
        }
        preview
        summary
        title
      }
    }
  }
`
