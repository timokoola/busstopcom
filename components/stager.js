export default function Stager({ stage }) {
  return (
    <div className="stack | text-500 | inline-squeeze">
      <ol>
        <li className={stage == 'first' ? 'big-shadow' : 'text-500' }>Search and select a bus stop</li>
        <li>Edit background</li>
        <li>Download Code</li>
        <li>Open in Scriptable</li>
      </ol>
    </div>
  );
}
