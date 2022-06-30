import React from "react";
import styled from "styled-components";

const ModalCont = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
`;

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #181818;
  border-radius: 0.5rem;
  padding: 2rem;
  margin: 0 auto;
  row-gap: 2rem;
  width: 100%;
  max-width: 1140px;
`;

const Title = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  //text-transform: uppercase;
  text-align: center;
  //color: #0267cc;
  color: #181818;
`;

const CloseBtn = styled.button`
  background-color: #bdbdbd;
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  margin: 0 auto;

  :hover {
    filter: brightness(95%);
  }
`;

const ContentUl = styled.ul`
  //display: grid;
  //grid-template-columns: repeat(1fr auto);
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  white-space: pre-wrap;
  line-height: 1.5rem;
  margin: 0 auto;
`;

const ContentLi = styled.li`
  display: flow-root;
  
  & > strong {
    display: block;
    font-size: 1.5rem;
    font-weight: 600;
    color: #006ad5;
    margin-bottom: 1rem;
    float: left;
    text-align: center;
    min-width: 5rem;
    margin-right: 1rem;
    //background-color: #eee;
  }

  & > p {
    display: block;
    float: left;
    padding-left: 1rem;
    border-left: 2px solid #bdbdbd;
    
  }

`;

const Modal = ({ handleModalOpen }) => {
  return (
    <ModalCont>
      <ModalContents>
        <Title>더 알아보기</Title>

        <ContentUl>
          <ContentLi>
            <strong>자기소개</strong>
            <p>
              안녕하세요. 서비스 운영 경험이 있는 프론트엔드 개발자 이규민입니다.{"\n"}
              <br />
              IT 기업에서 고객 서비스 상담부터 CS Solution 기획 및 운영에 대한 경험을 보유하고 있습니다.{"\n"}
              현재 FrontEnd 개발자가 되기 위해 멋쟁이사자처럼 프론트엔드 스쿨 부트캠프 과정을 수료하였습니다.{"\n"}
              <br />
              평소 반복되는 일을 자동화하고 비효율적인 프로세스를 개선하는 일을 좋아합니다.{"\n"}
              <br />
              서비스 운영 담당자로 업무할 당시 내부 출차 관리 기록을 엑셀 문서로 운영하고 있어 데이터 관리에{"\n"}
              어려움을 줄이기 위해 유관 부서와 적극적으로 소통하여 사내 시스템을 기획하고 개선한 경험이 있습니다.{"\n"}
            </p>
          </ContentLi>
          <ContentLi>
            <strong>QnA</strong>
            <p>
              <span>개발자로 직무를 전향한 계기는?{"\n"}</span>
              서비스 운영 담당자로 업무할 당시 내부 출차 관리 기록을 엑셀 문서로 운영하고 있어 데이터 관리에{"\n"}
              어려움을 줄이기 위해 유관 부서와 적극적으로 소통하여 사내 시스템을 기획하고 개선한 경험이 있습니다.{"\n"}
            </p>
          </ContentLi>
          <li>개발자로서 목표는 무엇인가요? (향후 5년)</li>
          <li>본인의 장단점은 무엇인가요?</li>
          <li></li>
        </ContentUl>

        <CloseBtn onClick={() => {
          handleModalOpen(false);
        }}>돌아가기
        </CloseBtn>
      </ModalContents>
    </ModalCont>
  );
};

export default Modal;
