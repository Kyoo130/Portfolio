import React from "react";
import styled from "styled-components";
import {
  faUser,
  faCalendar,
  faLocationDot,
  faPhone,
  faEnvelope,
  faGraduationCap,
  faCodeBranch,
  faB,
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
  margin-bottom: 2.5rem;
  text-transform: uppercase;
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

    :after {
      display: block;
      content: "";
      width: 33.33%;
      height: 100%;
    }
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
  max-width: 16.5rem;
  margin: 0 auto;
  padding-left: 0.5rem;

  & svg {
    color: #2a92d5;
    width: 32px;
    height: 32px;
    margin-right: 1.5rem;
  }

  & p {
    line-height: 1.5rem;
    font-weight: 300;
  }

  & strong {
    font-size: 1.2rem;
    font-weight: 600;
  }

  & a:hover {
    color: #2a92d5;
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
        <AboutLi>
          <AboutDiv>
            <FontAwesomeIcon icon={faCodeBranch} />
            <p>
              <strong>깃헙</strong>
              <br />
              <a
                href="https://github.com/Kyoo130"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/Kyoo130
              </a>
            </p>
          </AboutDiv>
        </AboutLi>
        <AboutLi>
          <AboutDiv>
            <FontAwesomeIcon icon={faB} />
            <p>
              <strong>블로그</strong>
              <br />
              <a
                href="https://velog.io/@kml9003"
                target="_blank"
                rel="noreferrer"
              >
                https://velog.io/@kml9003
              </a>
            </p>
          </AboutDiv>
        </AboutLi>
      </AboutUl>
    </AboutCont>
  );
};

export default About;
