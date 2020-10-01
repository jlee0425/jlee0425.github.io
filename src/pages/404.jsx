import React from "react"
import styled from "styled-components"

const Main = styled.div`
  padding: 75px;
`
const NotFound = ({ location }) => {
  return (
    <Main>
      <h1>404_Not Found.</h1>
      <p>Oops! The page you are looking for has been removed or relocated.</p>
    </Main>
  )
}

export default NotFound
