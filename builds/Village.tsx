import { mc } from "../utils.js";
import Fragment from "../components/Fragment.js";
import Grassland from "./Grassland.js";
import House from "../builds/House.js";

const Village = () => (
  <>
    <Grassland x1={-40} y={0} z1={-40} x2={40} z2={40} />

    {new Array(3)
      .fill(null)
      .flatMap((_, i) =>
        new Array(3)
          .fill(null)
          .map((_, j) => <House x={-10 + 10 * i} y={0} z={-10 + 10 * j} />),
      )}
  </>
);

export default Village;
