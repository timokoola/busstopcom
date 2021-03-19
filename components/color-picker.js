import { SwatchesPicker } from "react-color";

export default function BusColorPicker({ title, color, setColor, styling }) {
  return (
    <details>
      <summary>
        {title}{" "}
        <span className={styling}>{color.hex ? color.hex : "#489fb5"}</span>
      </summary>
      <div>
        <SwatchesPicker
          triangle="hide"
          disableAlpha="true"
          color={color}
          onChange={setColor}
        />
      </div>
    </details>
  );
}
