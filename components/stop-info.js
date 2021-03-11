import styles from "../styles/StopInfo.module.scss";

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
    <div
      className={styles.result_box}
      style={{ display: stop ? "block" : "none" }}
    >
      <div className={styles.bus_code}>
        <div>
          <a href={`https://reittiopas.hsl.fi/pysakit/${stop.gtfsId}`}>
            {stop.code} {stop.name}
          </a>
        </div>
        <div>{stop.gtfsId}</div>
      </div>
      <div className="text-300">{uniquePatterns}</div>
    </div>
  );
}
