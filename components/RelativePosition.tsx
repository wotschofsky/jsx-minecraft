import { BlocksMap, type McFC } from "../types.js";

type RelativePositionProps = {
  x: number;
  y: number;
  z: number;
  children?: BlocksMap;
};

const RelativePosition: McFC<RelativePositionProps> = (props) =>
  props.children.flat().map((block) => ({
    ...block,
    x: block.x + props.x,
    y: block.y + props.y,
    z: block.z + props.z,
  }));
RelativePosition.displayName = "RelativePosition";

export default RelativePosition;
