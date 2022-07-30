import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Modal from "./Modal";

const HomeCont = styled.section`
  background: url("/assets/homebackground_01.png") center/cover no-repeat;
  padding-top: calc(2rem + 3rem + 3rem);
  padding-bottom: 3rem;

  & > div {
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
  text-align: center;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 1.5rem;
  }
`;
const Introduce = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 0.75rem;

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

  & > img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    width: 200px;
    height: 200px;
  }
`;

const btnMove = keyframes`
  0% {
    transform: translate(50%, 30%);
  }
  50% {
    transform: translate(65%, 30%);
  }
  100% {
    transform: translate(50%, 30%);
  }
`;

const BtnCont = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 36px;
  font-size: 1.1rem;

  ::after {
    content: "";
    display: block;
    clear: both;
  }

  & span {
    display: none;
  }

  @media (min-width: 768px) {
    & span {
      display: block;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(50%, 30%);
      animation: ${btnMove} 1s 0.5s infinite linear alternate;
    }
  }
`;

const Btn = styled.button`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 0.8rem;
  border-radius: 5px;
  color: #0267cc;
  background-color: #fade70;

  :hover {
    filter: brightness(95%);
  }
`;

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleModalOpen = (e) => {
    setOpenModal(e);
  };

  useEffect(() => {
    if (openModal === true) {
      document.body.style.overflow = "hidden";
    } else if (openModal === false) {
      document.body.style.overflow = "unset";
    }
  }, [openModal]);

  return (
    <HomeCont id={"home"}>
      <div>
        <ProfileImg>
          <img src="/assets/profile_01.png" alt="profile" />
        </ProfileImg>
        <Title>프론트엔드 개발자 포트폴리오</Title>
        <Introduce>
          안녕하세요. 고객 서비스 경험을 바탕으로{"\n"}성장하고 싶은 프론트엔드 개발자 이규민 입니다.{"\n"}
          <br />
          고객 서비스 운영부터 상담 시스템 고도화 기획 {"\n"}업무에 대한 경험을 보유하고 있습니다.
        </Introduce>
        <BtnCont>
          <Btn onClick={() => {
            handleModalOpen(true);
          }}>더 알아보기</Btn>
          <span>👈 클릭해주세요!!!</span>
        </BtnCont>
        {
          openModal
            ? <Modal handleModalOpen={handleModalOpen} />
            : null
        }
      </div>
    </HomeCont>
  );
};

export default Home;
