import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import Header from "../../components/header";
import Link from "next/link";
import Stager from "../../components/stager";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BusColorPicker from "../../components/color-picker";
import { useEffect, useState } from "react";
import Footer from "../../components/footer";

const STOPINFO = gql`
  query StopInfo($id: String!) {
    stop(id: $id) {
      gtfsId
      name
      code
      stoptimesWithoutPatterns(numberOfDepartures: 4) {
        scheduledDeparture
        realtimeDeparture
        departureDelay
        realtime
        realtimeState
        serviceDay
        headsign
        trip {
          routeShortName
          tripHeadsign
          directionId
          route {
            type
          }
        }
      }
    }
  }
`;

function getDepartureTime(d) {
  let itemDate = new Date(d.serviceDay * 1000 + d.realtimeDeparture * 1000);
  return itemDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function Stop() {
  const [topColor, setTopColor] = useState("#489fb5");
  const [bottomColor, setBottomColor] = useState("#82c0cc");
  const [textColor, setTextColor] = useState("#ffffff");

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--gradient-top",
      topColor.hex ? topColor.hex : "#489fb5"
    );

    document.documentElement.style.setProperty(
      "--gradient-bottom",
      bottomColor.hex ? bottomColor.hex : "#489fb5"
    );

    document.documentElement.style.setProperty(
      "--widget-text-color",
      textColor.hex ? textColor.hex : "#ffffff"
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
        <div className="measure-short | font-sans | text-400 | stack flow">
          <section className="stack flow">
            <div className="stack">
              <Stager stage="second" />
            </div>
            <Link href="/">
              <a>Go back to search from</a>
            </Link>

            <BusColorPicker
              title="Top Color"
              color={topColor}
              setColor={setTopColor}
              styling="cool-gradient-top"
            />

            <BusColorPicker
              title="Text Color"
              color={textColor}
              setColor={setTextColor}
              styling="cool-gradient-text-bg"
            />

            <BusColorPicker
              title="Bottom Color"
              color={bottomColor}
              setColor={setBottomColor}
              styling="cool-gradient-bottom"
            />
          </section>
          <section>
            <h3>Colours Preview</h3>
            <div className="mini-gap">
              <div className="previewer | flow | text-400 | cool-gradient">
                <p className="text-500">
                  {data?.stop?.code} {data?.stop?.name}
                </p>
                {data?.stop?.stoptimesWithoutPatterns?.map((departure) => (
                  <div
                    key={departure.scheduledDeparture}
                    className="previewer-line"
                  >
                    <div className="previewer-left">
                      {departure?.trip?.routeShortName}
                    </div>
                    <div className="previewer-middle">
                      {departure?.trip?.tripHeadsign}
                    </div>
                    <div className="previewer-right">
                      {getDepartureTime(departure)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-300 mini-gap">
              Note! Preview only shows colours. Text typeface will be different
              on device.
            </p>
          </section>
          <section>
            <button className="download-button | text-600 font-base">
              Download Widget Code
            </button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Stop;
