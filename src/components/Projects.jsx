import React from "react";
import styled from "styled-components";

const ProjectsCont = styled.section`
  background-color: #eee;

  & > div {
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

const Article = styled.article`
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 3px 3px 5px 0 rgba(191, 191, 191, 0.53);
  padding: 1.5rem 1rem;
  margin-bottom: 2.5rem;
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

  @media (min-width: 768px) {
    border: none;
    background-color: #eee;
    border-radius: 5px;
    padding: 1.5rem 0;
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
`;

const GitBtn = styled.a`
  display: block;
  background-color: #181818;
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
        <Article>
          <CardUl>
            <li>
              <strong>Image Community</strong>
              <p>2022.05 (개인 프로젝트)</p>
            </li>
            <li>
              <img src="/assets/project_01.png" alt="이미지커뮤니티" />
              <Explanation>
                이미지와 함께 게시글을 올리고 소식을 공유하며, <br />
                소통할 수 있는 SNS 커뮤니티 서비스 입니다.
              </Explanation>
            </li>
            <li>
              <CardDl>
                <div>
                  <dt>사용 기술</dt>
                  <dd>
                    - React, Firebase, redux, redux-thunk, redux-actions, immer
                  </dd>
                </div>

                <div>
                  <dt>기능 구현</dt>
                  <dd>- 회원가입, 로그인 기능 개발</dd>
                  <dd>- 이미지 게시글 CRUD 기능 개발</dd>
                  <dd>- 댓글 작성 및 삭제 기능 개발</dd>
                  <dd>- 댓글 알림 기능 개발</dd>
                  <dd>- 재사용성을 높인 최소 단위 컴포넌트 개발</dd>
                  <dd>- 전역상태 관리(Redux) 사용 코드 개발</dd>
                  <dd>- Firebase 서버 연동 코드 개발</dd>
                </div>

                <div>
                  <dt>느낀점</dt>
                  <dd>
                    이미지와 함께 게시글을 공유하며, 다른 사람들과 소통할 수
                    있는 SNS 커뮤니티 프로젝트 입니다. 이 프로젝트를 통해
                    회원가입, 로그인 기능을 구현하여 Cookie, Session 개념을 배울
                    수 있었으며, 코드 재사용성과 유지보수를 위한 구조적 고민을
                    많이 하며 개발한 SNS 커뮤니티 프로젝트 입니다.
                  </dd>
                </div>

                <BtnList>
                  <dt className="a11y-hidden">GitHub & 테스트 URL</dt>
                  <dd>
                    <GitBtn
                      href="https://github.com/Kyoo130/image-community"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </GitBtn>
                  </dd>
                  <dd>
                    <UrlBtn
                      href="https://image-community-43dff.firebaseapp.com"
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
        <Article>
          <CardUl>
            <li>
              <strong>Image Community</strong>
              <p>2022.05 (개인 프로젝트)</p>
            </li>
            <li>
              <img src="/assets/project_01.png" alt="이미지커뮤니티" />
              <Explanation>
                이미지와 함께 게시글을 올리고 소식을 공유하며, <br />
                소통할 수 있는 SNS 커뮤니티 서비스 입니다.
              </Explanation>
            </li>
            <li>
              <CardDl>
                <div>
                  <dt>사용 기술</dt>
                  <dd>
                    - React, Firebase, redux, redux-thunk, redux-actions, immer
                  </dd>
                </div>

                <div>
                  <dt>기능 구현</dt>
                  <dd>- 회원가입, 로그인 기능 개발</dd>
                  <dd>- 이미지 게시글 CRUD 기능 개발</dd>
                  <dd>- 댓글 작성 및 삭제 기능 개발</dd>
                  <dd>- 댓글 알림 기능 개발</dd>
                  <dd>- 재사용성을 높인 최소 단위 컴포넌트 개발</dd>
                  <dd>- 전역상태 관리(Redux) 사용 코드 개발</dd>
                  <dd>- Firebase 서버 연동 코드 개발</dd>
                </div>

                <div>
                  <dt>느낀점</dt>
                  <dd>
                    이미지와 함께 게시글을 공유하며, 다른 사람들과 소통할 수
                    있는 SNS 커뮤니티 프로젝트 입니다. 이 프로젝트를 통해
                    회원가입, 로그인 기능을 구현하여 Cookie, Session 개념을 배울
                    수 있었으며, 코드 재사용성과 유지보수를 위한 구조적 고민을
                    많이 하며 개발한 SNS 커뮤니티 프로젝트 입니다.
                  </dd>
                </div>

                <BtnList>
                  <dt className="a11y-hidden">GitHub & 테스트 URL</dt>
                  <dd>
                    <GitBtn
                      href="https://github.com/Kyoo130/image-community"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </GitBtn>
                  </dd>
                  <dd>
                    <UrlBtn
                      href="https://image-community-43dff.firebaseapp.com"
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
        <Article>
          <CardUl>
            <li>
              <strong>Image Community</strong>
              <p>2022.05 (개인 프로젝트)</p>
            </li>
            <li>
              <img src="/assets/project_01.png" alt="이미지커뮤니티" />
              <Explanation>
                이미지와 함께 게시글을 올리고 소식을 공유하며, <br />
                소통할 수 있는 SNS 커뮤니티 서비스 입니다.
              </Explanation>
            </li>
            <li>
              <CardDl>
                <div>
                  <dt>사용 기술</dt>
                  <dd>
                    - React, Firebase, redux, redux-thunk, redux-actions, immer
                  </dd>
                </div>

                <div>
                  <dt>기능 구현</dt>
                  <dd>- 회원가입, 로그인 기능 개발</dd>
                  <dd>- 이미지 게시글 CRUD 기능 개발</dd>
                  <dd>- 댓글 작성 및 삭제 기능 개발</dd>
                  <dd>- 댓글 알림 기능 개발</dd>
                  <dd>- 재사용성을 높인 최소 단위 컴포넌트 개발</dd>
                  <dd>- 전역상태 관리(Redux) 사용 코드 개발</dd>
                  <dd>- Firebase 서버 연동 코드 개발</dd>
                </div>

                <div>
                  <dt>느낀점</dt>
                  <dd>
                    이미지와 함께 게시글을 공유하며, 다른 사람들과 소통할 수
                    있는 SNS 커뮤니티 프로젝트 입니다. 이 프로젝트를 통해
                    회원가입, 로그인 기능을 구현하여 Cookie, Session 개념을 배울
                    수 있었으며, 코드 재사용성과 유지보수를 위한 구조적 고민을
                    많이 하며 개발한 SNS 커뮤니티 프로젝트 입니다.
                  </dd>
                </div>

                <BtnList>
                  <dt className="a11y-hidden">GitHub & 테스트 URL</dt>
                  <dd>
                    <GitBtn
                      href="https://github.com/Kyoo130/image-community"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </GitBtn>
                  </dd>
                  <dd>
                    <UrlBtn
                      href="https://image-community-43dff.firebaseapp.com"
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
      </div>
    </ProjectsCont>
  );
};

export default Projects;
