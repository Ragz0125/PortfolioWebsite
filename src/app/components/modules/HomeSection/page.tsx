"use client";
import {
  FIRST_COLOR,
  SECOND_COLOR,
  SERVICES,
  SOCIAL_MEDIA_LINKS,
  THIRD_COLOR,
} from "@/app/utils/common";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Element } from "react-scroll";

const HomeSection = () => {
  return (
    <Wrapper>
      <Container name="homeSection">
        <Left>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, delay: 0.5 }}
          >
            Hi, I'm Raghav Rajaraman
          </motion.div>
          <ColoredLine
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, delay: 0.7 }}
          >
            A UI/UX Developer
          </ColoredLine>
          <Line
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, delay: 0.9 }}
          >
            UI is the bridge. UX is the experience of crossing it.
          </Line>
          <SocialMediaRow
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, delay: 1.1 }}
          >
            <Icon href={SOCIAL_MEDIA_LINKS[0]} target="_blank">
              <img src={"/github.png"} />
            </Icon>
            <Icon href={SOCIAL_MEDIA_LINKS[1]} target="_blank">
              <img src={"/instagram.png"} />
            </Icon>
            <Icon href={SOCIAL_MEDIA_LINKS[2]} target="_blank">
              <img src={"/twitter.png"} />
            </Icon>
          </SocialMediaRow>
        </Left>
        <Right>
          <ImageWrapper
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, delay: 0.5 }}
          ></ImageWrapper>
        </Right>
      </Container>

      <Bottom
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, delay: 0.5 }}
      >
        {SERVICES.map((service, index) => (
          <>
            {service} <img src="/star.svg" />
          </>
        ))}
      </Bottom>
    </Wrapper>
  );
};

export default HomeSection;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
`;

const Container = styled(Element)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  justify-content: space-between;
`;

const Left = styled.div`
  word-spacing: 3px;
  font-size: 24px;
  font-weight: semi-bold;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Line = styled(motion.div)`
  font-size: 14px;
  word-spacing: 3px;
`;

const ColoredLine = styled(motion.div)`
  background: linear-gradient(90deg, ${THIRD_COLOR}, #000, ${FIRST_COLOR});
  color: transparent;
  background-clip: text;
  font-size: 40px;
`;

const Right = styled.div``;

const ImageWrapper = styled(motion.div)`
  width: 350px;
  height: 400px;

  border: 4px solid transparent;
  border-radius: 15px;
  background: 
  /* background image layer with fallback color */ url("MyPic.jpg")
      center/cover no-repeat padding-box,
    /* fallback white background in case image fails to load */
      linear-gradient(white, white) padding-box,
    /* border gradient */
      linear-gradient(to right, ${THIRD_COLOR}, ${SECOND_COLOR}, ${FIRST_COLOR})
      border-box;

  background-origin: padding-box, padding-box, border-box;
  background-clip: padding-box, padding-box, border-box;
`;

const Bottom = styled(motion.div)`
  position: absolute;
  bottom: 0;

  height: 100px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  font-size: 13px;
  font-weight: 600;
`;

const SocialMediaRow = styled(motion.div)`
  display: flex;
  gap: 10px;
`;

const Icon = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
