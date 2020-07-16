import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import IconLink from './iconLink'

const Container = styled.div`
  display: flex;
  position: relative;
  justify-self: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  max-width: 340px;
  max-height: 480px;
`
const Background = styled(Img)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
  }
`
const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  padding: 10px;
  background: linear-gradient(
    220deg,
    rgba(255, 255, 255, 0.5),
    rgba(115, 114, 114, 0.5)
  );
  border-radius: 15px;
  box-shadow: 2px 2px 10px lightgrey;
`
const Title = styled.div`
  display: flex;
  color: White;
  height: 10%;
  justify-content: space-between;
  align-items: center;
`
const Button = styled.button`
  border: 1px solid;
  border-radius: 5px;
  padding: 3px;
  height: 1.5rem;
  background: white;
`
const Links = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  height: 1.5rem;
  font-size: 1.5rem;

  a {
    padding: 3px;
    height: 1.5rem;
    font-size: 1.2rem;
    color: white;
    border: ${props => props.giveborder === 'true' && '1px solid'};
  }
`
const ProjectCard = ({ data: { title, url, git, image, library } }) => {
  return (
    <Container>
      <Background fluid={image} />
      <DescriptionBox>
        <Title>
          <h2>{title}</h2>
          <Button disabled>{library}</Button>
        </Title>
        <Links>
          <IconLink git url={git} style={{ marginRight: '5px' }} />
          {url ? (
            <a href={url} giveborder='true'>
              LIVE
            </a>
          ) : null}
        </Links>
      </DescriptionBox>
    </Container>
  )
}

export default ProjectCard
