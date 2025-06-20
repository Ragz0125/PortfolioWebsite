"use client";
import { FIRST_COLOR, SECOND_COLOR, THIRD_COLOR } from "@/app/utils/common";
import styled from "styled-components";
import Button from "../Button/page";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";

const NavBar = () => {
  const onClick = (section: any) => {
    scroller.scrollTo(section, {
      smooth: true,
      offset: -100
    });
  };

  return (
    <Wrapper
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Container>
        <Logo>{`RAGZ`}</Logo>
        <Content>
          <Option onClick={() => onClick("homeSection")}>Home</Option>
          <Option onClick={() => onClick("aboutSection")}>About</Option>
          <Option onClick={() => onClick("skillSection")}>Skills</Option>
          <Option onClick={() => onClick("experienceSection")}>
            Experience
          </Option>
        </Content>
        <Button title={"CONTACT"} onClick={() => onClick("contactForm")} />
      </Container>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;

  position: fixed;
  z-index: 2;
`;
const Container = styled.div`
  width: 80%;
  height: 90px;
  border: 4px solid transparent;
  border-radius: 10px;
  background: linear-gradient(white, white) padding-box,
    /* inner background */
      linear-gradient(90deg, ${THIRD_COLOR}, ${SECOND_COLOR}, ${FIRST_COLOR})
      border-box; /* border gradient */
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
`;

const Option = styled.div`
  cursor: pointer;
  font-size: 14px;
  transition: font-size 1s;

  &:hover {
    font-size: 16px;
  }
`;

const Logo = styled.div`
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 2px;
`;
