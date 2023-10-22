import { mc } from "../utils.js";
import { McFC } from "../types.js";
import Block from "../components/Block.js";
import Box from "../components/Box.js";
import Fill from "../components/Fill.js";
import RelativePosition from "../components/RelativePosition.js";
import Roof from "./Roof.js";
import Table from "./Table.js";

type HouseProps = {
  x: number;
  y: number;
  z: number;
};

const House: McFC<HouseProps> = ({ x, y, z }) => (
  <RelativePosition x={x} y={y} z={z}>
    {/* Walls */}
    <Box
      id="stone_bricks"
      x1={-2}
      y1={0}
      z1={0}
      x2={2}
      y2={4}
      z2={4}
      forceEmpty
    />

    {/* Floor */}
    <Fill id="oak_planks" x1={-1} y1={0} z1={1} x2={1} y2={0} z2={3} />

    <Roof blockId="bricks" x={-3} y={3} z={-1} width={7} height={4} depth={7} />

    {/* Lighting */}
    <Block id="sea_lantern" x={0} y={4} z={2} />

    {/* Window and door */}
    <Block id="glass" x={1} y={2} z={0} />
    <Block id="air" x={-1} y={2} z={0} />
    <Block id="oak_door" x={-1} y={1} z={0} />

    {/* Interieur */}
    <Table x={1} y={1} z={2} />
  </RelativePosition>
);

export default House;
