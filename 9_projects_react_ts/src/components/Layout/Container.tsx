import type { ChildrenProps } from "../../types/ContainerTypes";

const Container = ({ children }: ChildrenProps) => {
  return <div className="max-w-[1200px] mx-auto">{children}</div>;
};

export default Container;
