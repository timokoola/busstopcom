import styles from "../styles/SearchBox.module.scss";

export default function SearchBox({ searchTerm, setSearchTerm }) {
  return (
    <div className="self-start | relative | text-400 | measure-short">
      <label htmlFor="bus_stop" id="bus_stop_label">
        Stop Name
      </label>
      <input
        type="text"
        className={styles.bus_stop}
        id="bus_stop"
        placeholder="stop name e.g. Rautatientori"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        autoFocus
      />
      <img
        src="looking_glass.svg"
        width="16px"
        height="16px"
        alt="search icon"
        className={styles.search_icon}
        alt=""
      />
    </div>
  );
}
