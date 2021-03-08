import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "../components/header";
import { useState } from "react";
import StopList from "../components/stop-list";
import SearchBox from "../components/search-box";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("elielin");
  return (
    <div className={styles.container}>
      <Head>
        <title>Bus Stop Widget Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Header />
      </header>

      <main className={styles.main}>
        <section>
          <div className="stack">
            <label htmlFor="username" id="bus_stop_label">
              Bus stop
            </label>
            <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <StopList name={searchTerm} />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p className="color-light | text-300">
          Copyright &copy; 2021 Timo Koola
        </p>
      </footer>
    </div>
  );
}
