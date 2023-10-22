import { BlocksMap, type McFC } from "../types.js";

type FragmentProps = {
  children: BlocksMap;
};

const Fragment: McFC<FragmentProps> = ({ children }) => children;
Fragment.displayName = "Fragment";

export default Fragment;
