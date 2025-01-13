"use client";
import { style } from "framer-motion/client";
import styles from "./CapabilitySection.module.scss";
import {
  ABOUT_SECTION_DESCRIPTION,
  CAPABILITY_SECTION_DESCRIPTION,
  SKILLS,
} from "@/utils";
import { useRouter } from "next/navigation";
import SkillButton from "../SkillButton";

const CapabilitySection = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.wrapper}>MY CAPABILITIES</div>
      </div>
      <div className={styles.right}>
        <div className={styles.about}>{CAPABILITY_SECTION_DESCRIPTION}</div>
        <div className={styles.skillWrap}>
          {SKILLS.map((skill: any, index) => (
            <SkillButton skill={skill} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CapabilitySection;
