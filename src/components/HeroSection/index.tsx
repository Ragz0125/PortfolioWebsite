"use client"
import { gitHubUrl, HERO_SECTION_DESCRIPTION, linkedInUrl, openInNewTab } from "@/utils";
import styles from "./HeroSection.module.scss";
import Button from "../Button";
import { GitHubIcon, LinkedinIcon } from "../Icons";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.content}>
          <div className={styles.intro}>HI, I AM</div>
          <div className={styles.intro}>RAGHAV RAJARAMAN</div>
          <div className={styles.description}>{HERO_SECTION_DESCRIPTION}</div>

          <div className={styles.buttonRow}>
            <Button title="CONTACT ME"/>
            <div className={styles.iconContainer} onClick={()=> openInNewTab(linkedInUrl)}>
              <LinkedinIcon />
            </div>
            <div className={styles.iconContainer}  onClick={()=> openInNewTab(gitHubUrl)}>
              <GitHubIcon />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.imageContainer}></div>
      </div>
    </div>
  );
};

export default HeroSection;
