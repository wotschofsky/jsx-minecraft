import { BlockId, type McFC } from "../types.js";
import { mc } from "../utils.js";
import Fill from "./Fill.js";
import Fragment from "./Fragment.js";

type BoxProps = {
  id: BlockId;
  x1: number;
  y1: number;
  z1: number;
  x2: number;
  y2: number;
  z2: number;
  forceEmpty?: boolean;
};

const Box: McFC<BoxProps> = (props) => (
  <>
    {/* Planes along x axis */}
    <Fill
      id={props.id}
      x1={props.x1}
      x2={props.x1}
      y1={props.y1}
      y2={props.y2}
      z1={props.z1}
      z2={props.z2}
    />
    <Fill
      id={props.id}
      x1={props.x2}
      x2={props.x2}
      y1={props.y1}
      y2={props.y2}
      z1={props.z1}
      z2={props.z2}
    />

    {/* Planes along y axis */}
    <Fill
      id={props.id}
      x1={props.x1}
      x2={props.x2}
      y1={props.y1}
      y2={props.y1}
      z1={props.z1}
      z2={props.z2}
    />
    <Fill
      id={props.id}
      x1={props.x1}
      x2={props.x2}
      y1={props.y2}
      y2={props.y2}
      z1={props.z1}
      z2={props.z2}
    />

    {/* Planes along z axis */}
    <Fill
      id={props.id}
      x1={props.x1}
      x2={props.x2}
      y1={props.y1}
      y2={props.y2}
      z1={props.z1}
      z2={props.z1}
    />
    <Fill
      id={props.id}
      x1={props.x1}
      x2={props.x2}
      y1={props.y1}
      y2={props.y2}
      z1={props.z2}
      z2={props.z2}
    />

    {props.forceEmpty && (
      <Fill
        id="air"
        x1={props.x1 + 1}
        x2={props.x2 - 1}
        y1={props.y1 + 1}
        y2={props.y2 - 1}
        z1={props.z1 + 1}
        z2={props.z2 - 1}
      />
    )}
  </>
);
Box.displayName = "Box";

export default Box;
