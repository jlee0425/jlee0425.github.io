import React from "react"
import { TransitionLink } from "gatsby-plugin-transitions"

const CustomTransitionLink = ({ item: { to, title } }) => (
  <TransitionLink
    to={to}
    leave={{
      opacity: 0,
      transform: "translate3d(-100%, 0, 0) scale3d(0.5, 0.5, 1)",
      config: {
        duration: 500,
      },
    }}
    enter={{
      opacity: 0,
      transform: "translate3d(100%, 0, 0) scale3d(1, 1, 1)",
    }}
    usual={{
      opacity: 1,
      transform: "translate3d(0%, 0, 0) scale3d(1, 1, 1)",
    }}
    style={{ textDecoration: "none" }}
  >
    {title}
  </TransitionLink>
)

export default CustomTransitionLink
