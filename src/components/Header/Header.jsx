import { TransitionLink } from "gatsby-plugin-transitions";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useViewWidth } from "../";
import BurgerMenu from "./BurgerMenu";
import RegularMenu from "./RegularMenu";

const Header = () => {
  const viewWidth = useViewWidth();
  const [isBurger, setBurger] = useState(false);
  const [open, setOpen] = useState(false);
  const handleMenuClick = () => setOpen(false);

  useEffect(() => {
    if (viewWidth < 810) {
      setBurger(true);
    } else {
      setBurger(false);
    }
  }, [viewWidth]);
  return (
    <Navbar isBurger={isBurger} isOpen={open}>
      <div>
        <TransitionLink
          to="/"
          leave={{
            opacity: 0,
            transform: "translate3d(0, -20%, 0) scale3d(0.5, 0.5, 1)",
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
            transform: "translate3d(0%, 0, 0) scale3d(1, 1, 1)",
          }}
        >
          <Logo
            src={require("../../images/icon.png")}
            alt="logo"
            onClick={() => setOpen(false)}
          />
        </TransitionLink>
      </div>
      {isBurger ? (
        <BurgerMenu
          setOpen={setOpen}
          isOpen={open}
          handleClick={handleMenuClick}
        />
      ) : (
        <RegularMenu handleClick={handleMenuClick} />
      )}
    </Navbar>
  );
};

const Navbar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  width: 100%;
  color: black;
  background: #101010;
  z-index: 2;
`;
const Logo = styled.img`
  display: block;
  max-height: 60px;
  max-width: 60px;
  height: 100%;
  width: 100%;
  margin: auto 1rem;
`;

export default Header;
