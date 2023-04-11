import React from "react";
import { BurgerBar, BurgerWrapper } from "./styles";

export const BurgerIcon = React.forwardRef(
  ({ open, color = null, ...props }, ref) => (
    <BurgerWrapper ref={ref} {...props}>
      <BurgerBar color={color} isOpen={open} barTop key="b1" />
      <BurgerBar color={color} isOpen={open} barMiddle key="b2" />
      <BurgerBar color={color} isOpen={open} barBottom key="b3" />
    </BurgerWrapper>
  )
);
