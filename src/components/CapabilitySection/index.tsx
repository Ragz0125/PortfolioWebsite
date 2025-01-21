"use client";
import styles from "./CapabilitySection.module.scss";
import {
  CAPABILITY_SECTION_DESCRIPTION,
  SKILLS,
} from "@/utils";
import SkillButton from "../SkillButton";

const CapabilitySection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.wrapper}>MY CAPABILITIES</div>
      </div>
      <div className={styles.right}>
        <div className={styles.about}>{CAPABILITY_SECTION_DESCRIPTION}</div>
        <div className={styles.skillWrap}>
          {SKILLS.map((skill: string, index) => (
            <SkillButton skill={skill} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CapabilitySection;
