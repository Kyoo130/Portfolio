import React from "react";
import styled from "styled-components";

const SkillsCont = styled.section`
  background-color: #fade70;
`;

const SkillsDiv = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2.5rem;
  text-transform: uppercase;
`;

const SkillsUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    row-gap: 3rem;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    align-items: inherit;
  }
`;
const SkillsLi = styled.li`
  & div {
    margin-bottom: 1rem;
    border-radius: 1rem;
    background-color: #fff;
    box-shadow: 3px 3px 5px 0 rgba(191, 191, 191, 0.53);
    overflow: hidden;
    transition: all 200ms linear;

    :hover {
      transform: scale(1.025);
    }
  }

  & p {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    margin: 0 auto;
    width: 80%;
  }

  & img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    width: 30%;
    & div {
      height: calc(100% - 2.5rem);
    }
  }
`;

const Skills = () => {
  return (
    <SkillsCont id={"skills"}>
      <SkillsDiv>
        <Title>Skills</Title>
        <SkillsUl>
          <SkillsLi>
            <div>
              <img src="/assets/skills_01.png" alt="Frontend Skills" />
            </div>
            <p>- Frontend -</p>
          </SkillsLi>
          <SkillsLi>
            <div>
              <img src="/assets/skills_02.png" alt="Frontend Skills" />
            </div>
            <p>- Tools -</p>
          </SkillsLi>
          <SkillsLi>
            <div>
              <img src="/assets/skills_03.png" alt="Frontend Skills" />
            </div>
            <p>- Office -</p>
          </SkillsLi>
        </SkillsUl>
      </SkillsDiv>
    </SkillsCont>
  );
};

export default Skills;
