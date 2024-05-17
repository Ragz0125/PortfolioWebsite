import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const AnimateNavigation = ({ children }: any) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div key={1} style={{height:"100%"}}>
        {children}
        <SlideOut
          initial={{ scaleY: 1 }}
          exit={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></SlideOut>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimateNavigation

const SlideIn = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #b16cea, #ff5e69, #ff8a56);
  transform-origin: bottom;
`;

const SlideOut = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #b16cea, #ff5e69, #ff8a56);
  transform-origin: top;
`;
