import React from "react";
import styled from "styled-components";

const HomeCont = styled.section`
  background: url("/assets/homebackground_01.png") center/cover no-repeat;
  padding: 3rem 0;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1140px;
    margin: 0 auto;
    color: #fff;
    gap: 1.5rem;
  }
`;
const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 1.5rem;
  }
`;
const Introduce = styled.p`
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.25;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 1.1rem;
    white-space: pre-wrap;
  }
`;

const ProfileImg = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 2px solid #fff;
  overflow: hidden;

  & img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    width: 200px;
    height: 200px;
  }
`;

const Btn = styled.button`
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 0.8rem;
  border: 2px solid #fff;
  border-radius: 5px;
  color: #fff;

  :hover {
    color: #2a92d5;
    background-color: #fade70;
    border: 2px solid transparent;
  }
`;

const Home = () => {
  const desc = [
    "안녕하세요. 서비스 운영 업무 경험이 있는 \n프론트엔드 개발자 이규민입니다.\n",
    "고객 서비스부터 CS Solution 기획 \n및 운영에 대한 경험을 보유하고 있습니다.",
  ];
  return (
    <HomeCont>
      <div>
        <ProfileImg>
          <img src="/assets/profile_01.png" alt="profile" />
        </ProfileImg>
        <Title>프론트엔드 개발자 포트폴리오</Title>
        <Introduce>
          {desc[0]}
          <br />
          {desc[1]}
        </Introduce>
        <Btn>더 알아보기 &#9662;</Btn>
      </div>
    </HomeCont>
  );
};

export default Home;
