import React from 'react'
import { useSpring, animated } from 'react-spring'
import Img from 'gatsby-image'
import styled from 'styled-components'
import IconLink from './iconLink'
const CardContainer = styled.div`
  display: flex;
  position: relative;
  justify-self: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  max-width: 340px;
  max-height: 480px;
  box-shadow: 1px 1px 3px grey;
  border-radius: 5px;
`
const Background = styled(Img)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  & > img {
    object-fit: fit !important;
    object-position: 0% 0% !important;
  }
`
const DescriptionBox = styled(animated.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`
const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 0;
`
const Links = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-around;
  font-size: 1.3rem;
  font-weight: bold;
  margin: 10px;
`
const ProjectCard = ({ data: { title, url, git, image } }) => {
  const [color, setColor] = useSpring(() => ({
    opacity: 0,
    color: 'black',
    config: { duration: 700 }
  }))
  const [background, setBackground] = useSpring(() => ({
    background:
      'linear-gradient(220deg, rgba(207, 207, 207, 0), rgba(170, 172, 174, 0.8))'
  }))
  return (
    <CardContainer>
      <Background fluid={image} />
      <DescriptionBox
        style={{ ...color, ...background }}
        onMouseEnter={() => {
          setColor({
            opacity: 1,
            color: 'white'
          })
          setBackground({
            background:
              'linear-gradient(220deg, rgba(207, 207, 207, 0.5), rgba(30, 43, 49, 1))'
          })
        }}
        onMouseLeave={() => {
          setColor({
            opacity: 0,
            color: 'black'
          })
          setBackground({
            background:
              'linear-gradient(220deg, rgba(207, 207, 207, 0), rgba(170, 172, 174, 0.8))'
          })
        }}
      >
        <Title>{title}</Title>
        <Links>
          <IconLink git url={git} />
          {url ? <a href={url}>LIVE</a> : null}
        </Links>
      </DescriptionBox>
    </CardContainer>
  )
}

export default ProjectCard
