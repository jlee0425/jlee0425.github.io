import React from 'react'
import { TransitionProvider, TransitionViews } from 'gatsby-plugin-transitions'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'

import Header from '../components/header'
import Footer from '../components/footer'

const Global = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: 'Roboto';
    color: #0c132c;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    a {
      color: #040826;
      transition: all 300ms linear;
    }
    a:hover {
      transform: scale(1.1);
    }        
  }
`
const Layout = ({ children, location }) => {
  return (
    <TransitionProvider
      location={location}
      mode='immediate'
      leave={{
        opacity: 0,
        transform: 'translate3d(0, 0%, 0) scale3d(0.5, 0.5, 1)',
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
        transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1)'
      }}
    >
      <Global />
      <Header />
      <TransitionViews>{children}</TransitionViews>
      <Footer />
    </TransitionProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
