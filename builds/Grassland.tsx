import { mc } from "../utils.js";
import { McFC } from "../types.js";
import Block from "../components/Block.js";
import Fill from "../components/Fill.js";
import Fragment from "../components/Fragment.js";

type GrasslandProps = {
  x1: number;
  y: number;
  z1: number;
  x2: number;
  z2: number;
};

const Grassland: McFC<GrasslandProps> = ({ x1, y, z1, x2, z2 }) => (
  <>
    <Fill id="grass_block" x1={x1} y1={y} z1={z1} x2={x2} y2={y} z2={z2} />

    {new Array(x2 - x1 + 1).fill(null).flatMap((_, x) =>
      new Array(z2 - z1 + 1).fill(null).map((_, z) => {
        const value = Math.random();

        if (value > 0.995)
          return <Block id="cornflower" x={x1 + x} y={1} z={z1 + z} />;

        if (value > 0.99)
          return <Block id="red_tulip" x={x1 + x} y={1} z={z1 + z} />;

        if (value > 0.7)
          return <Block id="grass" x={x1 + x} y={1} z={z1 + z} />;

        return null;
      }),
    )}
  </>
);

export default Grassland;
