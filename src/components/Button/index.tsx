import styles from "./Button.module.scss";
interface ButtonProps {
  title?: string;
  onClick?: Function
}
const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <div className={styles.container} onClick={() => onClick}>
      <div>{title}</div>
      <div className={styles.dot}>•</div>
    </div>
  );
};

export default Button;
