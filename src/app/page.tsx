"use client";
import { useEffect, useState } from "react";
import Loader from "./components/common/Loader/page";
import NavBar from "./components/common/NavBar/page";
import AboutSection from "./components/modules/AboutSection/page";
import ContactForm from "./components/modules/ContactForm/page";
import ExperienceSection from "./components/modules/ExperienceSection/page";
import HomeSection from "./components/modules/HomeSection/page";
import SkillSection from "./components/modules/SkillSection/page";
import styled from "styled-components";

export default function Home() {
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loader ? (
        <Wrapper>
          <Loader />
        </Wrapper>
      ) : (
        <>
          <NavBar />
          <HomeSection />
          <AboutSection />
          <SkillSection />
          <ExperienceSection />
          <ContactForm />
        </>
      )}
    </>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
