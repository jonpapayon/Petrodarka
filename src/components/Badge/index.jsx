import React from "react";
import { BadgeStyled } from "./styles";

export const Badge = ({ children, ...rest }) => {
  return <BadgeStyled {...rest}>{children}</BadgeStyled>;
};
