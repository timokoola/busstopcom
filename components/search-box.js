export default function SearchBox({ searchTerm, setSearchTerm }) {
  return (
    <div className="search_box">
      <input
        type="text"
        id="bus_stop"
        placeholder="stop name e.g. Rautatientori"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        autoFocus
      />
      <img
        src="images/looking_glass.svg"
        width="16px"
        height="16px"
        alt="search icon"
        className="search_icon"
      />
    </div>
  );
}
