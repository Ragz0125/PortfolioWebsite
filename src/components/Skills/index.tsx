import { primaryFontColor } from "@/global";
import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

const SkillsContainer = ({ title, imageSrc, height, width, index }: any) => {
  return (
    <Container whileHover={{scale:1.1}} style={{gridColumnEnd: index < 4 ? 'auto' : 'span 1'}}>
      <CircularContainer
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ ease: "easeOut", duration: 4, delay: 1 }}
      >
        <Image
          unoptimized={true}
          src={imageSrc}
          alt="Profile-Pic"
          height={height}
          width={width}
        />
      </CircularContainer>
      <motion.div
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 4, delay: 1 }}
      >

        <RegularFont>{title}</RegularFont>
      </motion.div>
    </Container>
  );
};

export default SkillsContainer;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const CircularContainer = styled(motion.div)`
  width: 150px;
  height: 150px;
  background: transparent;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Add pseudo-element styles here */
  &::after {
    content: "";
    position: absolute;
    inset: 2px; /* Inset 2px to create a 2px border */
    border-radius: 50%;
    /* No background needed for the pseudo-element itself */
    /* Border itself will be created using box-shadow */
    box-shadow: inset 0 0 0 3px #b16cea, inset 0 0 0 4px #ff5e69,
      inset 0 0 0 4px #ff8a56;
  }
`;

const RegularFont = styled.span`
  color: ${primaryFontColor};
  font-weight: 600;
`;
