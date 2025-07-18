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
    <LoaderWrapper>
      {LOADER_CONTENT.map((letter, index) => (
        <AnimatedLetter
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.5 + index/2 }}
        >
          {letter}
        </AnimatedLetter>
      ))}
    </LoaderWrapper>
  );
};

export default Loader;

const LoaderWrapper = styled.div`
  height: 100%;
  width: 150px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const AnimatedLetter = styled(motion.div)``;
