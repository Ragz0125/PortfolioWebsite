"use client";

import AnimateNavigation from "@/components/AnimateNavigation";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import SkillsContainer from "@/components/Skills";
import { Skills } from "@/constants";
import { backgroundColor } from "@/global";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";

const SkillsPage = () => {
  return (
    <AnimateNavigation>
      <Layout>
        <NavBar page="Skills"/>
        <ContentContainer>
          <Header title={"SKILLS"} />
          <ContentWrapper>
            {Skills.map((item,index) => (
              <SkillsContainer
                title={Object.keys(item)[0].toUpperCase()}
                imageSrc={Object.values(item)[0]}
                height ={Object.values(item)[1]}
                  width={Object.values(item)[2]}
                  index={index}
                
              />
            ))}
          </ContentWrapper>
        </ContentContainer>
      </Layout>
    </AnimateNavigation>
  );
};

export default SkillsPage;

const Layout = styled.main`
  height: 100%;
  background-color: ${backgroundColor};
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  padding: 30px 50px 0px 50px;
  height: 100%;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 80%;
`;
