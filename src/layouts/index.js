import React from "react"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"

import Header from "../components/Header"

const Global = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    font-family: 'Roboto';
    color: #29323c;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    a {
      color: #303030;
      transition: all 300ms linear;
    }
    a:hover {
      transform: scale(1.1);
    }   
    > * {
      box-sizing: border-box;
    }     
  }
`
const Layout = ({ children, location }) => {
  return (
    <TransitionProvider
      location={location}
      mode="immediate"
      leave={{
        opacity: 0,
        transform: "translate3d(0, 0%, 0) scale3d(0.5, 0.5, 1)",
        config: {
          duration: 500,
        },
      }}
      enter={{
        opacity: 0,
        transform: "translate3d(0, 20%, 0) scale3d(1, 1, 1)",
      }}
      usual={{
        opacity: 1,
        transform: "translate3d(0, 0%, 0) scale3d(1, 1, 1)",
      }}
    >
      <Global />
      <Header />
      <TransitionViews style={{ paddingTop: "75px" }}>
        {children}
      </TransitionViews>
    </TransitionProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
