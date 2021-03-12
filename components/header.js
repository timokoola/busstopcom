import styles from "../styles/Header.module.scss";

export default function Header() {
  return (
    <div className={styles.header_row}>
      <img src="/generic_logo.svg" className={styles.bus_icon} />
      <div className={styles.header_texts}>
        <h2 className="big-shadow">Widget Tool</h2>
        <p className="text-400 mini-gap">Generate code for a bus stop widget</p>
      </div>
    </div>
  );
}
