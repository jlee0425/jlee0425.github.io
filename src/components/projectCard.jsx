import React from 'react'
import { TransitionLink } from 'gatsby-plugin-transitions'
import Img from 'gatsby-image'
import styled from 'styled-components'

const CardContainer = styled(TransitionLink)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  height: 30vh;
  box-sizing: border-box;
  @media (min-width: 375px) {
    width: 100vw;
  }
  @media (min-width: 768px) {
    width: 50vw;
  }
  @media (min-width: 1024px) {
    width: 33vw;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 1px 1px 3px grey;
  border-radius: 0.25rem;
  flex: 1 1 auto;
`
const Thumbnail = styled(Img)`
  height: 80%;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  filter: contrast(90%);
  &:hover & {
    filter: contrast(100%);
  }
`
const DescriptionBox = styled.div`
  padding: 1rem;
`
const Title = styled.p`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #696969;
`
const Desc = styled.span`
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #cccccc;
  margin-bottom: 1.25rem;
`

const ProjectCard = ({ data: { title, desc, image, to } }) => {
  return (
    <CardContainer to={to}>
      <Content>
        <Thumbnail fluid={image} objectFit='cover' objectPosition='top right' />
        <DescriptionBox>
          <Title>{title}</Title>
          <Desc>{desc}</Desc>
        </DescriptionBox>
      </Content>
    </CardContainer>
  )
}

export default ProjectCard
