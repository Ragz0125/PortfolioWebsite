import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"
import HeroSection from "@/components/HeroSection"
import NavBar from "@/components/Navbar"
import React from "react"

export default function Home(){
  return(
    <>
    <NavBar/>
    <HeroSection/>
    <AboutSection doNotShowLink={false}/>
    <ContactSection/>
    </>
  )
}