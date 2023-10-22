import { BlockId, type BlocksMap, type McFC } from "../types.js";

const Fill: McFC<{
  id: BlockId;
  x1: number;
  y1: number;
  z1: number;
  x2: number;
  y2: number;
  z2: number;
}> = (props) => {
  const blocks: BlocksMap = [];
  const xMin = Math.min(props.x1, props.x2);
  const xMax = Math.max(props.x1, props.x2);
  for (let x = xMin; x <= xMax; x++) {
    const yMin = Math.min(props.y1, props.y2);
    const yMax = Math.max(props.y1, props.y2);
    for (let y = yMin; y <= yMax; y++) {
      const zMin = Math.min(props.z1, props.z2);
      const zMax = Math.max(props.z1, props.z2);
      for (let z = zMin; z <= zMax; z++) {
        blocks.push({ id: props.id, x, y, z });
      }
    }
  }
  return blocks;
};
Fill.displayName = "Fill";

export default Fill;
