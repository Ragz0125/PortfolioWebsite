"use client";
import { style } from "framer-motion/client";
import styles from "./AboutSection.module.scss";
import {
  ABOUT_SECTION_DESCRIPTION,
  gitHubUrl,
  linkedInUrl,
  openInNewTab,
} from "@/utils";
import { useRouter } from "next/navigation";
import Button from "../Button";
import { GitHubIcon, LinkedinIcon } from "../Icons";

const AboutSection = ({ doNotShowLink }: any) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.wrapper}>ABOUT ME</div>
      
      </div>
      <div className={styles.right}>
        <div className={styles.firstLine}>
          I am a front-end developer based in Chennai.
        </div>
        <div className={styles.firstLine}>
          Has Computer Science Engineering background.
        </div>

        <div className={styles.about}>{ABOUT_SECTION_DESCRIPTION}</div>

        {!doNotShowLink && (
          <div className={styles.link} onClick={() => router.push("/about")}>
            MORE ABOUT ME
          </div>
        )}
        {doNotShowLink && (
          <div className={styles.buttonRow}>
            <a
              href="/Raghav_Rajaraman_Resume.pdf"
              download={"Raghav_Rajaraman_Resume.pdf"}
            >
              <Button title={"DOWNLOAD RESUME"} />
            </a>
            <div
              className={styles.iconContainer}
              onClick={() => openInNewTab(linkedInUrl)}
            >
              <LinkedinIcon />
            </div>
            <div
              className={styles.iconContainer}
              onClick={() => openInNewTab(gitHubUrl)}
            >
              <GitHubIcon />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutSection;
