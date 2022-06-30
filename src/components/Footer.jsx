import React from 'react';
import styled from "styled-components";

const FooterCont = styled.footer`
  text-align: center;
  color: #fff;
  background-color: #222222;
  padding: 1.5rem 0;
  margin-top: 3rem;

  @media (min-width: 768px) {
    padding: 2rem 0;
  }
`

const Footer = () => {
  return (
    <FooterCont>
      &copy; 2022. Lee KyooMin. All rights reserved.
    </FooterCont>
  );
};

export default Footer;
