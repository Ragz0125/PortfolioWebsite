import styles from "./SkillButton.module.scss"

const SkillButton = ({skill}:any) => {
    return(
        <div className={styles.wrapper}>
            {skill}
        </div>
    )
}

export default SkillButton