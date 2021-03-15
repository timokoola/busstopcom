import Fade from "react-reveal/Fade";

export default function Stager({ stage }) {
  return (
    <div className="stack | text-500 | inline-squeeze">
      <ol>
        <li
          className={stage == "first" ? "big-shadow" : "text-500  | faded-text"}
        >
          Search and select a bus stop
        </li>
        <li
          className={stage == "second" ? "big-shadow" : "text-500 | faded-text"}
        >
          Edit background and Preview
        </li>
        <li
          className={stage == "second" ? "big-shadow" : "text-500 | faded-text"}
        >
          Download Code
        </li>
        <li
          className={stage == "second" ? "big-shadow" : "text-500 | faded-text"}
        >
          Open in <a href="https://scriptable.app">Scriptable</a>
        </li>
      </ol>
    </div>
  );
}
