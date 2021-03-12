import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import Header from "../../components/header";
import Link from "next/link";
import Stager from "../../components/stager";
import StopInfo from "../../components/stop-info";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChromePicker } from "react-color";
import { useEffect, useState } from "react";

const STOPINFO = gql`
  query StopInfo($id: String!) {
    stop(id: $id) {
      gtfsId
      name
      code
      patterns {
        code
        directionId
        name
        headsign
        route {
          gtfsId
          shortName
          longName
          mode
        }
      }
    }
  }
`;

function Stop() {
  const [topColor, setTopColor] = useState("#489fb5");
  const [bottomColor, setBottomColor] = useState("#82c0cc");

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--gradient-top',
      topColor.hex
    );

    document.documentElement.style.setProperty(
      '--gradient-bottom',
      bottomColor.hex
    );
  });
  const router = useRouter();
  const { gtfsId } = router.query;

  const { loading, error, data } = useQuery(STOPINFO, {
    variables: { id: gtfsId },
  });
  if (loading) return "Loading...";
  if (error) return `ERROR! ${error}`;

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
        <div className="measure-short | font-sans | text-400 | stack">
          <section className="stack">
            <div className="stack">
              <Stager stage="second" />
            </div>
            <Link href="/">
              <a>Go back to search from</a>
            </Link>
            <h3>Top Color</h3>
            <ChromePicker color={topColor} onChange={setTopColor} />
            <div className="text-900 | bg-primary | cool-gradient">
              Color test
            </div>
            <h3>Bottom Color</h3>
            <ChromePicker color={bottomColor} onChange={setBottomColor} />
            <StopInfo key={data?.stop?.gtfsId} stop={data?.stop} />
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <p className="color-light | text-300">
          Copyright &copy; 2021 Timo Koola
        </p>
      </footer>
    </div>
  );
}

export default Stop;
