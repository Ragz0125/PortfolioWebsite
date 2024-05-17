"use client";

import AnimateNavigation from "@/components/AnimateNavigation";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import TimeLine from "@/components/TimeLine";
import { backgroundColor } from "@/global";
import styled from "styled-components";

const ExperiencePage = () => {
  return (
    <>
      <AnimateNavigation>
        <Layout>
          <NavBar page = "Experience"/>
          <ContentContainer>
            <Header title={"Experience"} />
            <ContentWrapper>
             <TimeLine/>
            </ContentWrapper>
          </ContentContainer>
        </Layout>
      </AnimateNavigation>
    </>
  );
};

export default ExperiencePage;

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
 display:flex;
 justify-content: center;
  height: 80%;
`;

const Line = styled.div`
  width: 3px;
  height: 100%;
  background: linear-gradient(to right, #b16cea, #ff5e69, #ff8a56);
  border-radius: 10px;
`;
