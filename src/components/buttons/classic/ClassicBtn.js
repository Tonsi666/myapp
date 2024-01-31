import styles from "./ClassicBtn.module.css";

function ClassicBtn({ onClick, text, style }) {
  return (
    <div className={styles.myBtn} style={style} onClick={onClick}>
      {text}
    </div>
  );
}

export default ClassicBtn;
