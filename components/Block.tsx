import { BlockId, type McFC } from "../types.js";

const Block: McFC<{ id: BlockId; x: number; y: number; z: number }> = (
  props,
) => [{ id: props.id, x: props.x, y: props.y, z: props.z }];
Block.displayName = "Block";

export default Block;
