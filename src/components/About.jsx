import React from "react";
import styled from "styled-components";
import {
  faUser,
  faCalendar,
  faLocationDot,
  faPhone,
  faEnvelope,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutCont = styled.section`
  max-width: 1140px;
  margin: 0 auto;
  padding: 3rem 0;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 3rem;

  ::after {
    content: "";
    display: block;
    width: 10rem;
    height: 1.5px;
    margin: 0.5rem auto 0;
    border-radius: 5px;
    background-color: #2a92d5;
  }
`;

const AboutUl = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;
  }

  @media (min-width: 768px) {
    flex-direction: inherit;
    justify-content: space-between;
    row-gap: 2.5rem;
  }
`;

const AboutLi = styled.li`
  width: 100%;

  @media (min-width: 768px) {
    width: 33.33%;
    row-gap: 1rem;
  }
`;

const AboutDiv = styled.div`
  display: flex;
  width: 100%;
  max-width: 14rem;
  margin: 0 auto;

  & svg {
    color: #2a92d5;
    width: 32px;
    height: 32px;
    margin-right: 2rem;
  }

  & p {
    line-height: 1.5rem;
    font-weight: 300;
  }

  & strong {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const About = () => {
  return (
    <AboutCont>
      <Title>About Me</Title>
      <AboutUl>
        <AboutLi>
          <AboutDiv>
            <FontAwesomeIcon icon={faUser} />
            <p>
              <strong>이름</strong>
              <br />
              이규민 (Lee KyooMin)
            </p>
          </AboutDiv>
        </AboutLi>
        <AboutLi>
          <AboutDiv>
            <FontAwesomeIcon icon={faCalendar} />
            <p>
              <strong>생년월일</strong>
              <br />
              1990.03.11
            </p>
          </AboutDiv>
        </AboutLi>
        <AboutLi>
          <AboutDiv>
            <FontAwesomeIcon icon={faLocationDot} />
            <p>
              <strong>주소지</strong>
              <br />
              서울특별시 영등포구
            </p>
          </AboutDiv>
        </AboutLi>
        <AboutLi>
          <AboutDiv>
            <FontAwesomeIcon icon={faPhone} />
            <p>
              <strong>연락처</strong>
              <br />
              010-9231-7919
            </p>
          </AboutDiv>
        </AboutLi>
        <AboutLi>
          <AboutDiv>
            <FontAwesomeIcon icon={faEnvelope} />
            <p>
              <strong>이메일</strong>
              <br />
              kml9003@kakao.com
            </p>
          </AboutDiv>
        </AboutLi>
        <AboutLi>
          <AboutDiv>
            <FontAwesomeIcon icon={faGraduationCap} />
            <p>
              <strong>최종학력</strong>
              <br />
              국제대학교 졸업
            </p>
          </AboutDiv>
        </AboutLi>
      </AboutUl>
    </AboutCont>
  );
};

export default About;
