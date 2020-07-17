import React from 'react'
import { TransitionLink } from 'gatsby-plugin-transitions'
import styled from 'styled-components'
import './header.css'

const Navbar = styled.header`
  display: flex;
  align-items: center;
  height: 8vh;
  max-height: 75px;
  width: 100%;
  justify-content: space-between;
  color: black;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
`
const StyledList = styled.li`
  display: inline;
  flex-direction: row;
  list-style: none;
  padding-right: 30px;
  font-weight: bold;
  a:hover {
    color: #696a73;
    text-shadow: 1px 1px 2px #cccccd;
  }
`
const Logo = styled.div`
  margin-left: 15px;
`
const Header = () => (
  <Navbar>
    <Logo>
      <TransitionLink
        to='/'
        leave={{
          opacity: 0,
          transform: 'translate3d(0, -20%, 0) scale3d(0.5, 0.5, 1)',
          config: {
            duration: 500
          }
        }}
        enter={{
          opacity: 0,
          transform: 'translate3d(0, 20%, 0) scale3d(1, 1, 1)'
        }}
        usual={{
          opacity: 1,
          transform: 'translate3d(0%, 0, 0) scale3d(1, 1, 1)'
        }}
      >
        <img
          src={require('../images/icon.png')}
          style={{ width: '3vw', minWidth: '30px' }}
          alt='logo'
        />
      </TransitionLink>
    </Logo>
    <div>
      <ul>
        <StyledList>
          <TransitionLink
            to='/projects'
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
            PROJECTS
          </TransitionLink>
        </StyledList>
        <StyledList>
          <TransitionLink
            to='/resume'
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
            RESUME
          </TransitionLink>
        </StyledList>
      </ul>
    </div>
  </Navbar>
)

export default Header
