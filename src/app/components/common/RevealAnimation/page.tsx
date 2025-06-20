"use client"

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const RevealAnimation = ({ children }: any) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <Container
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 70 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {children}
    </Container>
  );
};

export default RevealAnimation;

const Container = styled(motion.div)``;
