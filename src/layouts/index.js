import React from 'react'
import { TransitionProvider, TransitionViews } from 'gatsby-plugin-transitions'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'

import Header from '../components/header'
import Footer from '../components/footer'

const Global = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    text-shadow: 1px 1px 2px lightgrey;
    font-family: 'Roboto';
    a {
      transition: all 0.3s ease;
    }
    a:hover {
      transform: scale(1.2);
    }        
  }
`
const StyledTransitionViews = styled(TransitionViews)`
  position: relative;
`
const Layout = ({ children, location }) => {
  return (
    <TransitionProvider
      location={location}
      mode='immediate'
      leave={{
        opacity: 0,
        transform: 'translate3d(0, 0vh, 0) scale3d(0.5, 0.5, 1)',
        config: { clamp: true }
      }}
      enter={{
        opacity: 0,
        transform: 'translate3d(0, 20vh, 0) scale3d(1, 1, 1)',
        config: { clamp: true }
      }}
      usual={{
        opacity: 1,
        transform: 'translate3d(0, 0vh, 0) scale3d(1, 1, 1)',
        config: { clamp: true }
      }}
    >
      <Global />
      <StyledTransitionViews>{children}</StyledTransitionViews>
      <Header />
      <Footer />
    </TransitionProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
