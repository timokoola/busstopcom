import Fade from "react-reveal/Fade";

export default function Stager({ stage }) {
  return (
    <div className="stack | text-500 | inline-squeeze">
      <ol>
        <li
          className={stage == "first" ? "big-shadow" : "text-500  | faded-text"}
        >
          Install <a href="https://scriptable.app">Scriptable</a> on your iPhone
        </li>
        <li
          className={stage == "first" ? "big-shadow" : "text-500  | faded-text"}
        >
          Install Helsinki Bus Widget from Scriptable Gallery
        </li>
        <li
          className={stage == "first" ? "big-shadow" : "text-500  | faded-text"}
        >
          Search for and Select Bus Stop
        </li>

        <li
          className={stage == "second" ? "big-shadow" : "text-500 | faded-text"}
        >
          Edit background and Preview
        </li>
        <li
          className={stage == "second" ? "big-shadow" : "text-500 | faded-text"}
        >
          Copy Parameters
        </li>
        <li
          className={stage == "second" ? "big-shadow" : "text-500 | faded-text"}
        >
          Paste Parameters into Widget
        </li>
      </ol>
    </div>
  );
}
