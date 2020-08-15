import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { TransitionLink } from 'gatsby-plugin-transitions'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconLink from '../components/iconLink'
import SEO from '../components/seo'

const Background = styled(Img)`
  position: absolute;
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
  height: 85%;
`
const Name = styled.h1`
  margin-top: 0;
  font-size: 3rem;
  background: linear-gradient(270deg, #29323c, #485563);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const Avatar = styled(Img)`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  box-shadow: 1px 1px 2px lightgrey;
`
const Sub = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40vw;
  max-width: 350px;
  font-size: 1.4rem;
  font-weight: bold;
  @media (max-width: 800px) {
    flex-direction: column;
    height: 20vh;
    justify-content: space-between;
    align-items: center;
  }
`
const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
  min-width: 100px;
`
const IndexPage = ({ location }) => {
  const {
    allFile: { edges }
  } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { in: "main" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            name
          }
        }
      }
    }
  `)
  const coverImg = edges.find(edge => edge.node.name === 'coverImg')
  const avatarImg = edges.find(edge => edge.node.name === 'avatar')
  return (
    <>
      <SEO title='Home' />
      <Background fluid={coverImg.node.childImageSharp.fluid} />
      <Main>
        <Avatar fluid={avatarImg.node.childImageSharp.fluid} />
        <h1 style={{ marginBottom: '0' }}>Hello, World!</h1>
        <Name>I'm Jake.</Name>
        <Sub>
          <TransitionLink
            to='/projects'
            mode='immediate'
            leave={{
              opacity: 0,
              transform: 'translate3d(100%, 0, 0) scale3d(0.5, 0.5, 1)',
              config: {
                duration: 500
              }
            }}
            enter={{
              opacity: 0,
              transform: 'translate3d(-100%, 0, 0) scale3d(1, 1, 1)'
            }}
            usual={{
              opacity: 1,
              transform: 'translate3d(0%, 0, 0) scale3d(1, 1, 1)'
            }}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
            <span> Projects</span>
          </TransitionLink>
          <Icons>
            <IconLink git url='https://github.com/jlee0425' />
            <IconLink
              instagram
              url='https://www.instagram.com/jake_jklee/'
              // style={{ margin: '15px' }}
            />
            <IconLink linkedin url='https://linkedin.com/in/jakejlee' />
          </Icons>
          <TransitionLink
            to='/resume'
            mode='immediate'
            leave={{
              opacity: 0,
              transform: 'translate3d(-100%, 0, 0) scale3d(0.5, 0.5, 1)',
              config: {
                duration: 500
              }
            }}
            enter={{
              opacity: 0,
              transform: 'translate3d(100%, 0, 0) scale3d(1, 1, 1)'
            }}
            usual={{
              opacity: 1,
              transform: 'translate3d(0%, 0, 0) scale3d(1, 1, 1)'
            }}
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
