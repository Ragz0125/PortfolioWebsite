import styles from "./Button.module.scss";
const Button = ({title, onClick}:any) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <div>{title}</div>
      <div className={styles.dot}>•</div>
    </div>
  );
};

export default Button;
