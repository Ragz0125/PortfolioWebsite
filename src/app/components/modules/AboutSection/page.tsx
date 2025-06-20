"use client"
import styled from "styled-components";
import Title from "../../common/Title/page";
import {
  ABOUT_CONTENT,
  FIRST_COLOR,
  SECOND_COLOR,
  THIRD_COLOR,
} from "@/app/utils/common";
import Button from "../../common/Button/page";
import RevealAnimation from "../../common/RevealAnimation/page";
import { Element } from "react-scroll";

const AboutSection = () => {
  const downloadFile =() => {
    const link = document.createElement('a');
    link.href = "/Raghav_Resume.pdf";
    link.download = "Raghav_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link)
  }
  return (
    <Wrapper name="aboutSection">
      <Container>
        <RevealAnimation>
          <Title title={"About"} />
        </RevealAnimation>

        <Content>
          <RevealAnimation>
            <ImageContainer />
          </RevealAnimation>

          <AboutContent>
            <RevealAnimation>{ABOUT_CONTENT} </RevealAnimation>
            <RevealAnimation>
              <Button title={"Download Resume"} onClick={()=> downloadFile()}/>
            </RevealAnimation>
          </AboutContent>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default AboutSection;

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

const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  justify-content: space-between;
`;

const ImageContainer = styled.div`
  width: 350px;
  height: 300px;
  border-radius: 10px;
  border: 4px solid transparent;
  background: 
  /* background image layer with fallback color */ url("AboutPic.jpg")
      center/cover no-repeat padding-box,
    /* fallback white background in case image fails to load */
      linear-gradient(white, white) padding-box,
    /* border gradient */
      linear-gradient(to right, ${THIRD_COLOR}, ${SECOND_COLOR}, ${FIRST_COLOR})
      border-box;

  background-origin: padding-box, padding-box, border-box;
  background-clip: padding-box, padding-box, border-box;
`;

const AboutContent = styled.div`
  width: 60%;
  text-align: left;
  height: 300px;

  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
