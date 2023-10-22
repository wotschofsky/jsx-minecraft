import { mc } from "../utils.js";
import { McFC } from "../types.js";
import Block from "../components/Block.js";
import Fragment from "../components/Fragment.js";

type TableProps = {
  x: number;
  y: number;
  z: number;
};

const Table: McFC<TableProps> = ({ x, y, z }) => (
  <>
    <Block id="birch_fence" x={x} y={y} z={z} />
    <Block id="spruce_pressure_plate" x={x} y={y + 1} z={z} />
  </>
);

export default Table;
