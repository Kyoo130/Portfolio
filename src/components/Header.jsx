import React from "react";
import { useState } from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const HeaderCont = styled.header`
  position: relative;
  box-shadow: 0 1px 0.3rem hsl(0deg 0% 80% / 80%);
`;

const NavCont = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  margin: 0 auto;
  padding: 1.2rem 2rem;
  background-color: #fff;
`;

const Title = styled.h1`
  color: #006AD5;
  font-size: 24px;
  font-weight: bold;
  margin: 0.25rem 0;
  cursor: pointer;
  ::after {
    content: "";
    display: inline-block;
    height: 1.2rem;
    width: 1.2rem;
    background-image: url("/assets/icon_01.png");
    background-position: 0 -3px;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const MenuBtn = styled.button`
  display: none;
  width: 2rem;
  height: 2rem;
  border: none;
  background: transparent;

  & svg {
    width: 100%;
    height: 100%;
    color: #181818;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    display: block;
  }
`;

const MenuUl = styled.ul`
  @media (min-width: 320px) and (max-width: 767px) {
    display: ${(props) => (props.BtnInfo ? "none" : "block")};
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    background-color: #fff;
  }
  @media (min-width: 768px) {
    display: flex;
    text-transform: capitalize;
  }
`;

const MenuLi = styled.li`
  cursor: pointer;
  @media (min-width: 320px) and (max-width: 767px) {
    & span {
      display: block;
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-radius: 5px;

      :hover {
        color: #fff;
        background-color: #bdbdbd;
      }
    }
  }

  @media (min-width: 768px) {
    margin: 0 0.5rem;
    & span {
      padding: 0.5rem 0.5rem;
      border-radius: 5px;

      :hover {
        background-color: #006AD5;
        color: #fff;
      }
    }
  }
`;

const Header = () => {
  const menus = [
    { id: 0, title: "home" },
    { id: 1, title: "about" },
    { id: 2, title: "skills" },
    { id: 3, title: "work" },
    { id: 4, title: "testimonials" },
    { id: 5, title: "contact" },
  ];

  const [BtnInfo, setBtnInfo] = useState(true);

  const menuClick = () => {
    if (BtnInfo === true) {
      setBtnInfo(false);
    } else if (BtnInfo === false) {
      setBtnInfo(true);
    }
  };

  return (
    <HeaderCont>
      <NavCont>
        <Title>Kyoo's Portfolio</Title>
        <MenuBtn onClick={menuClick}>
          {BtnInfo ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faXmark} />
          )}
        </MenuBtn>
        <MenuUl BtnInfo={BtnInfo}>
          {menus.map((menu) => (
            <MenuLi key={menu.id}>
              <span>{menu.title}</span>
            </MenuLi>
          ))}
        </MenuUl>
      </NavCont>
    </HeaderCont>
  );
};

export default Header;
