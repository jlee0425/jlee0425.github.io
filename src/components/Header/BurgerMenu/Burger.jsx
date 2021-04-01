import React from "react";
import Burger from "@animated-burgers/burger-rotate";
import "@animated-burgers/burger-rotate/dist/styles.css";
import styled, { keyframes } from "styled-components";
import Menu from "../Menu";
import "./Burger.css";

const BurgerMenu = ({ isOpen, setOpen, handleClick }) => {
  const isExpanded = isOpen;
  return (
    <>
      <CustomBurger onClick={() => setOpen(!isExpanded)} isOpen={isOpen} />
      {isOpen && (
        <BurgerMenuContainer>
          <Menu handleClick={handleClick} isBurger={true} />
        </BurgerMenuContainer>
      )}
    </>
  );
};

const SlideOut = keyframes`
  from {
    transform: 'translateX(-100%)';
  }
  to {
    transform: 'translateX(0)';
  }
`;
const SlideIn = keyframes`
  from {
    transform: 'translateX(0)';
  }
  to {
    visibility: 'hidden';
    transform: 'translateX(-100%)';
  }
`;
const CustomBurger = styled(Burger)`
  position: fixed;
  right: 0;
  margin-right: 2.5rem;
  z-index: 10;
`;
const BurgerMenuContainer = styled.div`
  position: absolute;
  top: 75px;
  height: 350px;
  width: 100vw;
  margin: 0;
  padding: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 2rem;
  background-color: #303030;
  `;
  /* // animation: ${({ isOpen }) =>
    isOpen ? `${SlideIn} forwards` : `${SlideOut}`;
  animation-duration: 0.5s;
  animation-timing-function: linear;

  > * {
    &:not(:first-child) {
      margin-top: 1rem;
    }
  } */

export default BurgerMenu;
