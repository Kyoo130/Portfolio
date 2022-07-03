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
  faB
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

const ListCont = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, auto);
  justify-content: center;
  row-gap: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, auto);
    justify-content: space-around;
  }
`;

const TestLi = styled.li`
  display: flex;

  & > svg {
    color: #2a92d5;
    width: 32px;
    height: 32px;
    margin-right: 1.5rem;
  }

  & > p {
    line-height: 1.5rem;
    font-weight: 300;

    & > strong {
      font-size: 1.1rem;
      font-weight: 600;
      letter-spacing: 0.2rem;
    }

    & > a:hover {
      color: #2a92d5;
    }
  }
`;

const About = () => {
  return (
    <AboutCont id={"about"}>
      <Title>About Me</Title>
      <ListCont>
        <TestLi>
          <FontAwesomeIcon icon={faUser} />
          <p>
            <strong>이름</strong>
            <br />
            이규민 (Lee KyooMin)
          </p>
        </TestLi>
        <TestLi>
          <FontAwesomeIcon icon={faCalendar} />
          <p>
            <strong>생년월일</strong>
            <br />
            1990.03.11
          </p>
        </TestLi>
        <TestLi>
          <FontAwesomeIcon icon={faLocationDot} />
          <p>
            <strong>주소지</strong>
            <br />
            서울특별시 영등포구
          </p>
        </TestLi>
        <TestLi>
          <FontAwesomeIcon icon={faPhone} />
          <p>
            <strong>연락처</strong>
            <br />
            010-9231-7919
          </p>
        </TestLi>
        <TestLi>
          <FontAwesomeIcon icon={faEnvelope} />
          <p>
            <strong>이메일</strong>
            <br />
            kml9003@kakao.com
          </p>
        </TestLi>
        <TestLi>
          <FontAwesomeIcon icon={faGraduationCap} />
          <p>
            <strong>최종학력</strong>
            <br />
            국제대학교 졸업
          </p>
        </TestLi>
        <TestLi>
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
        </TestLi>
        <TestLi>
          <FontAwesomeIcon icon={faB} />
          <p>
            <strong>블로그</strong>
            <br />
            <a
              href="https://kyoo130.tistory.com"
              target="_blank"
              rel="noreferrer"
            >
              https://kyoo130.tistory.com
            </a>
          </p>
        </TestLi>
      </ListCont>
    </AboutCont>
  );
};

export default About;
