"use client";
import { EXPERIENCE } from "@/utils";
import styles from "./ExperienceSection.module.scss";

import { useRouter } from "next/navigation";

const ExperienceSection = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.wrapper}>MY EXPERIENCE</div>
      </div>
      <div className={styles.right}>
        {EXPERIENCE.map((exp, index) => (
          <div className={styles.experienceContainer} key={index}>
            <div className={styles.row}>
              <div>{exp.role}</div>
              <div className={styles.lightText}>{exp.duration}</div>
            </div>
            <div className={styles.company}>{exp.company}</div>
            <div className={styles.point}>
              {exp.description.map((point, index) => (
                <div className={styles.lightText_point} key={index}>
                  {point}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
