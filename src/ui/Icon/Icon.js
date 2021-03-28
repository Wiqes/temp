import React from "react";

import { icons } from "constants/icons";

export const Icon = ({ iconName, fontSize = "18px", onClick, ...props }) => {
  const Component = icons[iconName];
  return Component ? (
    <Component style={{ fontSize }} onClick={onClick} {...props} />
  ) : null;
};
