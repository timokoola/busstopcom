export default function Stager({ stage }) {
  return (
    <div className="stack | text-500 | inline-squeeze">
      <ol>
        <li
          className={stage == "zero" ? "big-shadow" : "text-500  | faded-text"}
        >
          Install <a href="https://scriptable.app">Scriptable</a> on your iPhone
        </li>
        <li
          className={stage == "zero" ? "big-shadow" : "text-500  | faded-text"}
        >
          Grab{" "}
          <a href="https://gist.github.com/timokoola/a44268ee25bc7b22cc9e7c850d17b72c">
            Helsinki Bus Widget code
          </a>
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
