"use client"
import {
  FIRST_COLOR,
  LOADER_CONTENT,
  SECOND_COLOR,
  THIRD_COLOR,
} from "@/app/utils/common";
import { motion } from "framer-motion";
import styled from "styled-components";

const Loader = () => {
  return (
    <Wrapper>
      {LOADER_CONTENT.map((letter, index) => (
        <AnimatedLetter
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.5 + index/2 }}
        >
          {letter}
        </AnimatedLetter>
      ))}
    </Wrapper>
  );
};

export default Loader;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnimatedLetter = styled(motion.div)``;
