import { Rcon } from "rcon-client";

import { applyBuild, clearSpace, mc } from "./utils.js";
import Village from "./builds/Village.js";

const rcon = await Rcon.connect({
  host: "localhost",
  port: 25575,
  password: "jsx",
});

await clearSpace(rcon);
await applyBuild(rcon, <Village />);

rcon.end().then(() => {
  process.exit(0);
});
