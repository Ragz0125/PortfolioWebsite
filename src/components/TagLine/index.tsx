import { backgroundColor } from "@/global";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

const TagLine = () => {
  const loop = [1, 2, 3];
  return (
    <Container>
      <motion.div
        style={{ height: "100%",  }}
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      >
        <Wrapper>
          {loop.map((i, key) => (
            <>
              <Contain>
                <Font>Develop</Font>
                <Image
                  src="/star.svg"
                  alt="star"
                  unoptimized={true}
                  height={20}
                  width={20}
                />
              </Contain>
              <Contain>
                <Font>Discover</Font>
                <Image
                  src="/star2.svg"
                  alt="star"
                  unoptimized={true}
                  height={20}
                  width={20}
                />
              </Contain>
              <Contain>
                <Font>Design</Font>
                <Image
                  src="/star3.svg"
                  alt="star"
                  unoptimized={true}
                  height={20}
                  width={20}
                />
              </Contain>
            </>
          ))}
        </Wrapper>
      </motion.div>
    </Container>
  );
};

export default TagLine;

const Container = styled.div`
  height: 80px;
  width: 100%;
  background: #fff;

  padding: 0 20px 0 20px;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  gap: 35px;
  align-items: center;
`;

const Contain = styled.div`
  display: flex;
  gap: 35px;
  align-items: center;
`;

const Font = styled.span`
  color: ${backgroundColor};
  font-size: 24px;
  font-weight: 800;
`;
