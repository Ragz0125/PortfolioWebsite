import styles from "./SkillButton.module.scss"

interface SkillButtonProps{
    skill?: string
}

const SkillButton = ({skill}:SkillButtonProps) => {
    return(
        <div className={styles.wrapper}>
            {skill}
        </div>
    )
}

export default SkillButton