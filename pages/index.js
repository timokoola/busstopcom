import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "../components/header";
import { useState } from "react";
import StopList from "../components/stop-list";
import SearchBox from "../components/search-box";
import Stager from "../components/stager";
import Footer from "../components/footer";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
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
        <div className="measure-short | font-sans | text-400">
          <section>
            <div className="stack">
              <Stager stage="first" />
              <div className="stack">
                <SearchBox
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
              </div>
              <output>
                <div className="stack | vertical-space">
                  <StopList
                    name={searchTerm !== "" ? searchTerm : "rautatientori"}
                  />
                </div>
              </output>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
