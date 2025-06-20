"use client"
import styled from "styled-components";
import Title from "../../common/Title/page";
import {
  FIRST_COLOR,
  SECOND_COLOR,
  SKILLS,
  THIRD_COLOR,
} from "@/app/utils/common";
import RevealAnimation from "../../common/RevealAnimation/page";
import { Element } from "react-scroll";

const SkillSection = () => {
  return (
    <Wrapper name="skillSection">
      <Container>
        <RevealAnimation>
          {" "}
          <Title title={"Skills"} />
        </RevealAnimation>

        <Content>
          {SKILLS.map((skill, index) => (
            <RevealAnimation>
              <SkillTab title={skill.title} imageUrl={skill.url} />{" "}
            </RevealAnimation>
          ))}
        </Content>
      </Container>
    </Wrapper>
  );
};

export default SkillSection;

const SkillTab = ({ title, imageUrl }: any) => {
  return (
    <TabWrapper>
      <img src={imageUrl} height={60} width={60} />
      {title}
    </TabWrapper>
  );
};
const Wrapper = styled(Element)`
  width: 100%;
  height: 70%;

  padding-top: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  height: 100%;
  width: 85%;
`;
const TabWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  border: 3px solid transparent;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, ${FIRST_COLOR}, #666666, ${THIRD_COLOR});

  font-size: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
`;

const Content = styled.div`
  padding-top: 30px;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  height: 100%;
  justify-items: center;
  align-items: center;
`;
