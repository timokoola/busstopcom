import styles from "../styles/StopInfo.module.scss";
import Link from "next/link";
import LinkBar from "../components/link-bar";

function patternToSimple(pattern) {
  const short = pattern.name.split(" ")[0];
  return `${short}\u00a0${pattern.headsign} `;
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
        <div className="text-300 stack box-padding">
          {uniquePatterns}{" "}
          
          <LinkBar
            linkText={`Select Stop ${stop.code} ${stop.name}`}
            linkUrl={`/stops\/${stop.gtfsId}`}
            placement="reversed"
          />
        </div>
      </div>
  );
}
