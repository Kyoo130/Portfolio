import React from "react";
import styled from "styled-components";

const Section = styled.section`
  & > div {
    max-width: 1140px;
    margin: 0 auto;
    padding: 3rem 1rem;
    display: grid;
    grid-template-columns: repeat(1, auto);
    row-gap: 3.5rem;
    justify-content: center;

    @media (min-width: 768px) {
      row-gap: 2.5rem;
      grid-template-columns: repeat(2, auto);
      justify-content: space-around;

      & > :nth-child(1) {
        grid-column: 1 / 3;
      }

      & > :nth-child(2) {
        grid-column: 1 / 2;
        grid-row: 2 / 4;
      }

      & > :nth-child(3) {
        grid-column: 2 / 3;
        grid-row: 3 / 4;
      }
      
      & > :nth-child(4) {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
      }
    }
  }
`;

const Title = styled.h2`
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;

const SubTit = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #006ad5;
  text-align: center;
  margin-bottom: 1.5rem;
  letter-spacing: 0.45rem;
`;

const ListCont = styled.dl`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  color: #222;
  line-height: 1.5rem;

  @media (min-width: 768px) {
    & > div {
      padding-left: 1rem;
      border-left: 2px solid #bdbdbd;
    }
  }
`;

const ListUl = styled.ul`
  line-height: 1.5rem;

  @media (min-width: 768px) {
    padding-left: 1rem;
    border-left: 2px solid #bdbdbd;
  }
`;

const StrongEl = styled.strong`
  font-weight: 600;

`;
const SmallEl = styled.small`
  color: #6c757d;
  margin-left: 0.5rem;
  font-size: 0.85rem;
`;


const Career = () => {
  return (
    <Section id={"career"}>
      <div>
        <Title>Career</Title>

        <article>
          <SubTit>경력</SubTit>
          <ListCont>
            <div>
              <dt>
                <StrongEl>파킹클라우드</StrongEl>
                <SmallEl>2020.08 - 2021.08</SmallEl>
              </dt>
              <dd>- 내부 출차 관리 기록 전산화 고도화 기획</dd>
              <dd>- CS 상담 Solution 관리 및 운영 담당</dd>
              <dd>- CS 고객센터 도급 운영지원 및 VOC 개선</dd>
            </div>

            <div>
              <dt>
                <StrongEl>컴투스홀딩스</StrongEl>
                <SmallEl>2017.11 - 2019.07</SmallEl>
              </dt>
              <dd>- 게임 프로젝트 CS 운영 및 정책 관리</dd>
              <dd>- CS 교육 및 운영툴 가이드 제작</dd>
              <dd>- 국내외 사용자별 VOC 분석 및 이슈 대응</dd>
            </div>

            <div>
              <dt>
                <StrongEl>트랜스코스모스코리아</StrongEl>
                <SmallEl>2016.03 - 2017.11</SmallEl>
              </dt>
              <dd>- 고객서비스 상담 및 VOC 민원 처리</dd>
              <dd>- 신입 사원 직무 교육 및 QA 담당</dd>
              <dd>- 내부 운영툴 및 CS 상담 가이드 제작</dd>
            </div>
            <div>
              <dt>
                <StrongEl>컴구조</StrongEl>
                <SmallEl>2012.08 - 2013.08</SmallEl>
              </dt>
              <dd>- 컴퓨터 AS 및 판매</dd>
              <dd>- 거래처 관리 및 유지보수</dd>
            </div>
          </ListCont>
        </article>

        <article>
          <SubTit>교육</SubTit>
          <ListCont>
            <div>
              <dt>
                <StrongEl>멋쟁이사자처럼 FE 스쿨 1기</StrongEl>
                <SmallEl>2021.11 - 2022.01</SmallEl>
              </dt>
              <dd>- Front-end 기술 역량 강화 부트캠프 과정 수료</dd>
              <dd>- 사용 기술: HTML, CSS, JavaScript, React</dd>
            </div>

            <div>
              <dt>
                <StrongEl>멋쟁이사자처럼 직장인 3기</StrongEl>
                <SmallEl>2021.05 - 2021.07</SmallEl>
              </dt>
              <dd>- Python과 Django를 이용한 웹 개발 교육 수료</dd>
              <dd>- 사용 기술 : Python, Django</dd>
            </div>
          </ListCont>
        </article>

        <article>
          <SubTit>학력</SubTit>
          <ListUl>
            <li>
              <StrongEl>국제대학교 실용음악과</StrongEl>
              <SmallEl>2010.02 - 2012.02</SmallEl>
            </li>
            <li>
              <StrongEl>선유고등학교</StrongEl>
              <SmallEl>2006.02 - 2009.02</SmallEl>
            </li>
          </ListUl>
        </article>
      </div>
    </Section>
  );
};

export default Career;
