import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  width: 100%;
  height: 3vh;
  bottom: 0;
  position: fixed;
  background: grey;
  * {
    margin-right: 10px;
  }
`
export default () => (
  <Footer>
    <span>Built with</span>
    <a href='https://www.gatsbyjs.org' target='_new'>
      Gatsby
    </a>
    <span>By</span>
    <a href='https://jlee0425.github.io'>Jake Lee</a>
  </Footer>
)
