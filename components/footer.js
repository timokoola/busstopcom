import styles from "../styles/Home.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className="color-light | text-300">
        Copyright &copy; 2021{" "}
        <a href="https://blog.timokoola.com">Timo Koola</a>
      </p>
    </footer>
  );
}
