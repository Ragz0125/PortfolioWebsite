"use client";
import styled from "styled-components";
import { backgroundColor } from "@/global";
import NavBar from "@/components/NavBar";
import TagLine from "@/components/TagLine";
import HeroContent from "@/components/HeroContent";

import AnimateNavigation from "@/components/AnimateNavigation";

export default function Home() {
  return (
    <AnimateNavigation>
      <Layout>
        <NavBar page ="Home"/>
        <HeroContent />
        <TagLine />
      </Layout>
    </AnimateNavigation>
  );
}

const Layout = styled.main`
  height: 100%;
  background-color: ${backgroundColor};
  display: flex;
  flex-direction: column;
`;
