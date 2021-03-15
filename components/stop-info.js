import styles from "../styles/StopInfo.module.scss";
import Link from "next/link";
import Fade from "react-reveal/Fade";

function patternToSimple(pattern) {
  const short = pattern.name.split(" ")[0];
  return `${short} ${pattern.headsign} `;
}

export default function StopInfo({ stop }) {
  const uniquePatterns = stop?.patterns
    ?.map((p) => patternToSimple(p))
    .reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      []
    )
    .sort();

  //let linkUrl = `https://reittiopas.hsl.fi/pysakit/${currentStop.gtfsId}`;

  return (
    <Fade left>
      <div
        className={styles.result_box}
        style={{ display: stop ? "block" : "none" }}
      >
        <div className={styles.bus_code}>
          <div>
            <Link href={`/stops\/${stop.gtfsId}`}>
              <a>
                {stop.code} {stop.name}
              </a>
            </Link>
          </div>
          <div>{stop.gtfsId}</div>
        </div>
        <div className="text-300">{uniquePatterns}</div>
      </div>
    </Fade>
  );
}
