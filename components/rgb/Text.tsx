import styles from "./Text.module.css";

interface ITextProps {
  children: React.ReactNode;
}

const Text: React.FC<ITextProps> = ({ children }) => (
  <div className={styles.Text}>{children}</div>
);

export default Text;
