import { SwatchesPicker } from "react-color";
import Fade from "react-reveal/Fade";

export default function BusColorPicker({ title, color, setColor, styling }) {
  return (
    <details>
      <summary>
        {title}{" "}
        <span className={styling}>
          {color.hex ? color.hex : "#489fb5"}
        </span>
      </summary>
      <div>
        <Fade>
          <SwatchesPicker
            triangle="hide"
            disableAlpha="true"
            color={color}
            onChange={setColor}
          />
        </Fade>
      </div>
    </details>
  );
}
