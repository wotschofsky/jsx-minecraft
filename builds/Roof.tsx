import { BlockId, BlocksMap, type McFC } from "../types.js";
import { mc } from "../utils.js";
import Fill from "../components/Fill.js";
import RelativePosition from "../components/RelativePosition.js";

const Roof: McFC<{
  x: number;
  y: number;
  z: number;
  blockId: BlockId;
  width: number;
  height: number;
  depth: number;
}> = ({ x: xStart, y: yStart, z: zStart, blockId, width, height, depth }) => {
  const stepHeight = height / width;

  const components: BlocksMap = [];

  for (let steps = 0; steps < width / 2; steps++) {
    const computedY = Math.round(0 + steps * stepHeight);
    components.push(
      <Fill
        id={blockId}
        x1={steps}
        x2={steps}
        y1={computedY}
        y2={computedY}
        z1={0}
        z2={depth - 1}
      />,
      <Fill
        id={blockId}
        x1={width - 1 - steps}
        x2={width - 1 - steps}
        y1={computedY}
        y2={computedY}
        z1={0}
        z2={depth - 1}
      />,
    );
  }

  return (
    <RelativePosition x={xStart} y={yStart} z={zStart}>
      {components}
    </RelativePosition>
  );
};
Roof.displayName = "Roof";

export default Roof;
