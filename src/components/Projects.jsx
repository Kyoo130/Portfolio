import React from "react";
import styled from "styled-components";

const ProjectsCont = styled.section`
  background-color: #eee;
  //background-color: #fff;

  & div {
    max-width: 1140px;
    margin: 0 auto;
    padding: 3rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2.5rem;
`;

const ProjectsUl = styled.ul`
  display: flex;

  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-content: center;
    row-gap: 2rem;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    gap: 1rem;
  }
`;

const ProjectsLi = styled.li`
  padding-bottom: 0.5rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 3px 3px 5px 0 rgba(191, 191, 191, 0.53);
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  transition: all 200ms linear;

  :hover {
    transform: scale(1.025);
  }

  @media (min-width: 768px) {
    width: 30%;
  }
`;

const CardUl = styled.ul`
  & li {
    margin-bottom: 0.5rem;
  }

  & img {
    width: 100%;
    height: auto;
  }
`;

const CardTit = styled.li`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const CardLi = styled.li`
  padding: 0 1rem;
`;

const Projects = () => {
  return (
    <ProjectsCont>
      <div>
        <Title>Projects</Title>
        <ProjectsUl>
          <ProjectsLi>
            <CardUl>
              <li>
                <img src="/assets/project_01.png" alt="project01" />
              </li>
              <CardTit>이미지 커뮤니티</CardTit>
              <CardLi>2022.05 (개인 프로젝트)</CardLi>
              <CardLi>
                이미지와 함께 게시글을 공유하며, 소통할 수 있는 SNS 커뮤니티
                서비스 입니다.
              </CardLi>
            </CardUl>
          </ProjectsLi>
          <ProjectsLi>
            <CardUl>
              <li>
                <img src="/assets/project_01.png" alt="project01" />
              </li>
              <CardTit>이미지 커뮤니티</CardTit>
              <CardLi>2022.05 (개인 프로젝트)</CardLi>
              <CardLi>
                이미지와 함께 게시글을 공유하며, 소통할 수 있는 SNS 커뮤니티
                서비스 입니다.
              </CardLi>
            </CardUl>
          </ProjectsLi>
          <ProjectsLi>
            <CardUl>
              <li>
                <img src="/assets/project_01.png" alt="project01" />
              </li>
              <CardTit>이미지 커뮤니티</CardTit>
              <CardLi>2022.05 (개인 프로젝트)</CardLi>
              <CardLi>
                이미지와 함께 게시글을 공유하며, 소통할 수 있는 SNS 커뮤니티
                서비스 입니다.
              </CardLi>
            </CardUl>
          </ProjectsLi>
        </ProjectsUl>
      </div>
    </ProjectsCont>
  );
};

export default Projects;
