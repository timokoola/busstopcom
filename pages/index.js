import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skadi Next Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Links</li>
            <li>About</li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <p>Hep</p>
      </main>

      <footer className={styles.footer}>
        <p className="color-ternary | text-300">Hop</p>
      </footer>
    </div>
  );
}
