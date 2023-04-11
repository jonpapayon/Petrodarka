import React from "react";
import { AnchorStyled } from "./styles";

export const LinkButton = ({ children, ...rest }) => {
  return <AnchorStyled {...rest}>{children}</AnchorStyled>;
};
