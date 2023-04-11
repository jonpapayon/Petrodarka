import React from "react";
import { ButtonStyled } from "./styles";

export const Button = React.forwardRef(({ children, ...rest }, ref) => {
  return (
    <ButtonStyled ref={ref} {...rest}>
      {children}
    </ButtonStyled>
  );
});
