import { BlocksMap, type McFC } from "./types.js";
import { Rcon } from "rcon-client";

const deduplicateBlocks = (inputBlocks: BlocksMap): BlocksMap => {
  const blocks: BlocksMap = [];

  for (const block of inputBlocks) {
    const existingBlock = blocks.findIndex(
      (b) => b.x === block.x && b.y === block.y && b.z === block.z,
    );

    if (existingBlock !== -1) {
      blocks.splice(existingBlock, 1);
    }

    blocks.push(block);
  }

  return blocks;
};

const sortBlocks = (inputBlocks: BlocksMap): BlocksMap =>
  inputBlocks.sort((a, b) => a.y - b.y || a.z - b.z || a.x - b.x);

export const mc = (
  type: McFC,
  passedProps = null,
  ...children: BlocksMap
): BlocksMap => {
  const flatChildren = children.flat(Infinity).filter(Boolean);

  for (const child of flatChildren) {
    if (typeof child !== "object") {
      console.error(child);
      throw new Error(`Invalid child of type ${typeof child}`);
    }
  }

  const refinedChildren = sortBlocks(deduplicateBlocks(flatChildren));

  const props = passedProps || {};
  props.children = refinedChildren;

  return [...type(props)];
};

export const clearSpace = async (rcon: Rcon) => {
  const startTime = Date.now();
  const promises: Promise<string>[] = [];
  for (let z = -100; z <= 100; z += 10) {
    for (let x = -100; x <= 100; x += 10) {
      promises.push(rcon.send(`fill ${x} 0 ${z} ${x + 10} 255 ${z + 10} air`));
    }
  }
  await Promise.all(promises);
  console.log(`Cleared in ${Date.now() - startTime}ms`);
};

export const applyBuild = async (rcon: Rcon, build: BlocksMap) => {
  const filteredBlocks = build.filter((block) => block.id !== "air");

  const promises = filteredBlocks.map((block) =>
    rcon.send(`setblock ${block.x} ${block.y} ${block.z} ${block.id}`),
  );
  const results = await Promise.all(promises);
  for (const message of results) {
    console.log(message);
  }
};
