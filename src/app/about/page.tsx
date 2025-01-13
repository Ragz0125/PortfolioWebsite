import AboutSection from "@/components/AboutSection"
import CapabilitySection from "@/components/CapabilitySection"
import ContactSection from "@/components/ContactSection"
import ExperienceSection from "@/components/ExperienceSection"
import ImageBanner from "@/components/ImageBanner"
import NavBar from "@/components/Navbar"

export default function AboutMePage() {
    return(
        <>
        <NavBar/>
        <AboutSection doNotShowLink={true}/>
        {/* <ImageBanner/> */}
        <CapabilitySection/>
        <ExperienceSection/>
        <ContactSection/>
        </>
    )
}