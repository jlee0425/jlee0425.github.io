import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { TransitionLink } from 'gatsby-plugin-transitions'
import Img from 'gatsby-image'
import styled from 'styled-components'
import {
  faGithub,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconLink from '../components/iconLink'

const Background = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  opacity: 0.5;
  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;';
  }
  @media screen and (max-width: 600px) {
    height: ${({ mobileHeight }) => mobileHeight};
  }
`
const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
`
const Name = styled.h1`
  margin-top: 0;
  font-size: 3rem;
`
const Sub = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30vw;
  font-size: 1.5rem;
  @media (max-width: 800px) {
    flex-direction: column;
    height: 20vh;
    justify-content: space-between;
    align-items: center;
  }
`
const IndexPage = ({ location }) => {
  const coverImage = useStaticQuery(graphql`
    query {
      imageSharp(fluid: { originalName: { eq: "_MG_0007.jpg" } }) {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)
  return (
    <>
      <Background fluid={coverImage.imageSharp.fluid} />
      <Main>
        <h1 style={{ marginBottom: '0' }}>Hello, World!</h1>
        <Name>I'm Jake.</Name>
        <Sub>
          <TransitionLink
            to='/projects'
            mode='immediate'
            leave={{ opacity: 0, transform: 'translate3d(100%, 0, 0)' }}
            enter={{ opacity: 0, transform: 'translate3d(-100%, 0, 0)' }}
            usual={{ opacity: 1, transform: 'translate3d(0%, 0, 0)' }}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
            <span> Projects</span>
          </TransitionLink>
          <IconLink git url='https://github.com/jlee0425' />
          <IconLink instagram url='https://www.instagram.com/jake_jklee/' />
          <IconLink linkedin url='https://linkedin.com/in/jakejlee' />
          <TransitionLink
            to='/resume'
            mode='immediate'
            leave={{ opacity: 0, transform: 'translate3d(-100%, 0, 0)' }}
            enter={{ opacity: 0, transform: 'translate3d(100%, 0, 0)' }}
            usual={{ opacity: 1, transform: 'translate3d(0%, 0, 0)' }}
          >
            <span>Resume </span>
            <FontAwesomeIcon icon={faAngleRight} />
          </TransitionLink>
        </Sub>
      </Main>
    </>
  )
}

export default IndexPage
