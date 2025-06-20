"use client";
import { useEffect, useState } from "react";
import Loader from "./components/common/Loader/page";
import NavBar from "./components/common/NavBar/page";
import AboutSection from "./components/modules/AboutSection/page";
import ContactForm from "./components/modules/ContactForm/page";
import ExperienceSection from "./components/modules/ExperienceSection/page";
import HomeSection from "./components/modules/HomeSection/page";
import SkillSection from "./components/modules/SkillSection/page";

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
        <Loader />
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
