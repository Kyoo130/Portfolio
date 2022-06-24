import React from "react";
import styled from "styled-components";
import { projectData } from "../shared/projectData";

const ProjectsCont = styled.section`
  background-color: #eee;

  & > div {
    display: flex;
    flex-direction: column;
    max-width: 1140px;
    margin: 0 auto;
    padding: 3rem 1rem;
    row-gap: 2.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;

const Article = styled.article`
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 3px 3px 5px 0 rgba(191, 191, 191, 0.53);
  padding: 1.5rem 1rem;
`;

const CardUl = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  // Title
  & li:nth-child(1) {
    text-align: center;
    line-height: 1.75rem;

    & strong {
      font-weight: 600;
      font-size: 1.5rem;
    }

    & p {
      color: #6c757d;
    }
  }

  // Image
  & li:nth-child(2) {
    width: 100%;

    & img {
      width: 100%;
      height: auto;
      margin-bottom: 1.5rem;
    }
  }

  @media (min-width: 768px) {
    flex-direction: initial;
    flex-wrap: wrap;
    justify-content: space-around;

    // Title
    & li:nth-child(1) {
      width: 100%;
      color: #006ad5;
    }

    // Image
    & li:nth-child(2) {
      width: 45%;
    }

    // Contents
    & li:nth-child(3) {
      width: 45%;
    }

    // Button
    & li:nth-child(4) {
      width: 50%;
      margin-left: auto;
    }
  }
`;

const Explanation = styled.p`
  text-align: center;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #bdbdbd;
  line-height: 1.5;

  @media (min-width: 768px) {
    border: none;
    background-color: #eee;
    border-radius: 5px;
    padding: 1.25rem 0;
    white-space: pre-wrap;
  }
`;

const CardDl = styled.dl`
  display: flex;
  flex-direction: column;
  line-height: 1.5rem;
  row-gap: 1.5rem;

  & dt {
    font-size: 1.25rem;
    font-weight: 600;
    padding-bottom: 0.5rem;
  }
`;

const BtnList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: #fff;
  gap: 1rem;

  & dd {
    width: 100%;
    height: auto;
  }

  & a {
    flex: 1;
    padding: 0.5rem 0;
    border-radius: 5px;
    font-weight: 600;
  }

  & a:hover {
    opacity: 0.925;
  }

`;

const GitBtn = styled.a`
  display: block;
  background-color: #222;
`;

const UrlBtn = styled.a`
  display: block;
  background-color: #006ad5;
`;

const Projects = () => {
  return (
    <ProjectsCont>
      <div>
        <Title>Projects</Title>
        {
          projectData.map((project) => (
            <Article key={project.id}>
              <CardUl>
                <li>
                  <strong>{project.title}</strong>
                  <p>{project.created_dt} ({project.type})</p>
                </li>
                <li>
                  <img src={project.image} alt="이미지커뮤니티" />
                  <Explanation>
                    {project.summary}
                  </Explanation>
                </li>
                <li>
                  <CardDl>
                    <div>
                      <dt>사용 기술</dt>
                      <dd>
                        - {project.skills}
                      </dd>
                    </div>

                    <div>
                      <dt>기능 구현</dt>
                      {project.description.map((item, idx) => (<dd key={idx}>- {item}</dd>))}
                    </div>

                    <div>
                      <dt>느낀점</dt>
                      <dd>
                        {project.result}
                      </dd>
                    </div>

                    <BtnList>
                      <dt className="a11y-hidden">GitHub & 테스트 URL</dt>
                      <dd>
                        <GitBtn
                          href={project.github_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </GitBtn>
                      </dd>
                      <dd>
                        <UrlBtn
                          href={project.test_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          TEST URL
                        </UrlBtn>
                      </dd>
                    </BtnList>
                  </CardDl>
                </li>
              </CardUl>
            </Article>
          ))
        }
      </div>
    </ProjectsCont>
  );
};

export default Projects;
