import React from "react"
import styled from "styled-components"
import links from "../../../data/links.json"
import { CustomTransitionLink, IconLink } from "../../Links"
import MenuItem from "./MenuItem"

const Icons = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => (flex ? "column" : "row")};
  justify-content: space-around;
  ${({ flex }) =>
    flex
      ? ` 
    > * {
      &:not(:first-child) {
        margin-top: 1rem;
      }
    }
    `
      : `
    > * {
      &:not(:first-child) {
        margin-left: 2rem;
      }
    }
    `}
`
const Menu = ({ handleClick, isBurger }) => {
  const menu = [
    { to: "/portfolio", title: "Portfolio" },
    { to: "/resume", title: "Resume" },
  ]
  const link = links.slice(0, 3)
  return (
    <>
      {menu.map((item, index) => (
        <MenuItem
          key={index}
          delay={`${index * 0.1}s`}
          onClick={() => handleClick()}
        >
          <CustomTransitionLink item={item} />
        </MenuItem>
      ))}
      <Icons flex={isBurger}>
        {link.map((icon, index) => (
          <MenuItem
            key={index}
            delay={`${index * 0.1 + 0.2}s`}
            onClick={() => handleClick()}
          >
            <IconLink type={icon.type} url={icon.url} />
          </MenuItem>
        ))}
      </Icons>
    </>
  )
}

export default Menu
