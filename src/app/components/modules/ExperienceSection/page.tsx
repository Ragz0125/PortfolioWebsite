"use client"
import styled from "styled-components";
import Title from "../../common/Title/page";
import { EXPERIENCE_CONTENT } from "@/app/utils/common";
import { Element } from "react-scroll";
import RevealAnimation from "../../common/RevealAnimation/page";

const ExperienceSection = () => {
  return (
    <Wrapper name="experienceSection">
      <Container>
        <RevealAnimation>
          <Title title={"Experience"} />
        </RevealAnimation>
        <MainContent>
          {EXPERIENCE_CONTENT.map((content, index) => (
            <ExperienceContent>
              <RevealAnimation>
                <Company>{content.company}</Company>
              </RevealAnimation>
              <RevealAnimation>
                <Role>{content.role}</Role>
              </RevealAnimation>
              {content.content.map((point, index) => (
                <RevealAnimation>
                  <Body>{point}</Body>
                </RevealAnimation>
              ))}
            </ExperienceContent>
          ))}
        </MainContent>
      </Container>
    </Wrapper>
  );
};

export default ExperienceSection;

const Wrapper = styled(Element)`
  width: 100%;
  height: 60%;

  padding-top: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 100%;
  width: 85%;
`;

const MainContent = styled.div`
  height: 100%;
  display: flex;

  padding-top: 50px;
`;

const ExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  gap: 10px;
`;

const Company = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

const Role = styled.div`
  font-weight: 600;
  font-size: 15px;
  color: gray;
`;

const Body = styled.div`
  font-size: 14px;
  color: #252525;
`;
