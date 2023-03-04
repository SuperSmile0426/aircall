// import node_modules
import React from "react";

// import styles
import { LayoutComponentStyle } from "./index.style";

// store & redux

interface Props {
  children: React.ReactNode
}

const LayoutComponent: React.FC<Props> = (props: Props) => {
  return (
    <LayoutComponentStyle>
      {props.children}
    </LayoutComponentStyle>
  );
};

export default LayoutComponent;
