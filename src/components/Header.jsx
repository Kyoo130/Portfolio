import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const HeaderCont = styled.header`
  position: fixed;
  width: 100%;
  height: auto;
  background-color: #fff;
  box-shadow: 0 1px 0.3rem hsl(0deg 0% 80% / 80%);
  z-index: 10;
`;

const NavCont = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  overflow: hidden;
  @media (min-width: 320px) and (max-width: 767px) {
    padding: 1.5rem 2rem 1.5rem;
  }

`;

const Title = styled.h1`
  color: #006AD5;
  font-size: 24px;
  font-weight: bold;
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
    color: #222;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    display: block;
  }
`;

const MenuUl = styled.ul`
  transition: max-height 0.3s ease;

  @media (min-width: 320px) and (max-width: 767px) {
    display: flex;
    visibility: ${(props) => (props.BtnInfo ? "hidden" : "visible")};
    flex-direction: column;
    width: 100%;
    max-height: ${(props) => (props.BtnInfo ? "0" : "30rem")};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
  }
  @media (min-width: 768px) {
    display: flex;
    text-transform: capitalize;
  }
`;

const MenuLi = styled.li`
  cursor: pointer;
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: 1.5rem;

    & a {
      display: block;
      padding: 0.75rem 0;
      border-radius: 5px;

      :hover {
        color: #fff;
        background-color: #006AD5;
      }
    }
  }

  @media (min-width: 768px) {
    margin: 0 0.5rem;
    & a {
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
    { id: 3, title: "projects" },
    { id: 4, title: "career" }
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
        <Title>
          <Link to="home" spy={true} smooth={true}>
            Kyoo's Portfolio
          </Link>
        </Title>
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
              <Link to={menu.title} spy={true} smooth={true} offset={-64}>
                {menu.title}
              </Link>
            </MenuLi>
          ))}
        </MenuUl>
      </NavCont>
    </HeaderCont>
  );
};

export default Header;
